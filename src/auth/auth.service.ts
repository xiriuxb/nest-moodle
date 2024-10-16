import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Prisma, User } from "prisma/generated/nestClient";
import { DatabaseService } from "src/database/database.service";
import { EmailTemplates, MailService } from "src/mail/mail.service";
import { ResetNewPasswordDTO, ResetPasswordDTO, SigninDTO, UserRegisterDto } from "./auth.dto";
import { logger } from "handlebars";

@Injectable()
export class AuthService{
    constructor (
        private dbService: DatabaseService, 
        private jwtService:JwtService,
        private config: ConfigService,
        private mailService: MailService
    ){}

    async login(dto: SigninDTO){
        const argon2 = require('argon2');
        try {
            const user = await this.getUserByEmail(dto.email);
            if(!await argon2.verify(user.password,dto.password)){
                throw new Error('Contraseña incorrecta');
            }

            const token = await this.signToken(user.email);
            return {token};
        } catch (error) {
            throw new HttpException({'message':[{'constrints':{'not-found':'Email o contraseña incorrecto(s)'}}]},HttpStatus.BAD_REQUEST);
        }
    }

    async signToken(email: string):Promise<string>{
        const payload = {
            email
        }
        return await this.jwtService.signAsync(payload, {
            expiresIn: '15m',
            secret: this.config.get('JWT_SECRET')
        });
    }

    async sendResetPassword(dto:ResetPasswordDTO){
        try {
            const user = await this.getUserByEmail(dto.email);
            const token = await this.signToken(user.email);
            await this.dbService.user.update({
                where: {
                  id: user.id,
                },
                data: {
                  remember_token: token,
                },
              });
            const url = `${this.config.get('APP_URL')}auth/password_reset?token=${token}`;
            await this.mailService.sendEmail(
                user.email, 
                EmailTemplates.RESET_PASSWORD,
                {name:user.name, url}
            );
            return {message:'Email enviado', status: HttpStatus.OK};
            
        } catch (error) {
            throw new HttpException({'message':[{'constrints':{'not-found':error}}]},HttpStatus.BAD_REQUEST);
        }
    }

    async resetPassword(dto:ResetNewPasswordDTO, token:string, userEmail:string){
        if(dto.password !== dto.confirm_password){
            throw new HttpException({'message':[{'constrints':{'password':'Las contraseñas no coinciden'}}]}, HttpStatus.BAD_REQUEST);
        }
        try{
            const user = await this.getUserByEmail(userEmail);
            if(user.remember_token !== token){
                throw new Error('Token inválido');
            }
            const new_pass = await this.generateArgonPassword(dto.password);
            await this.dbService.user.update({
                where:{id:user.id},
                data:{password:new_pass, remember_token:null}
            })
        } catch(error) {
            throw new HttpException({'message':[{'constrints':{'not-found':error}}]},HttpStatus.BAD_REQUEST)
        }
        return {message:'Contraseña actualizada', status:HttpStatus.OK};
    }

    async register(dto: UserRegisterDto) {
        try {
            const pass = await this.generateArgonPassword(dto.password);
            const username = await this.createUserName(dto.name, dto.last_name);
            const token = await this.signToken(dto.email);
            const newUser = await this.dbService.user.create({
                data: {
                    name: dto.name,
                    last_name: dto.last_name,
                    password: pass,
                    email: dto.email,
                    username: username,
                    remember_token: token,
                    roles:{connect:[{name:'user'}]}
                },
                select: {
                    name: true,
                    last_name: true,
                    email: true,
                    username: true
                }
            });
            const url = `${this.config.get('APP_URL')}auth/confirm?token=${token}`;
            // await this.mailService.sendEmail(newUser.email, EmailTemplates.CONFIRM_EMAIL,{name:newUser.name, url});
            return newUser;
        } catch (error) {
            logger.log(1,error);
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === 'P2002') {
                    throw new HttpException({'message':[{'property':'email', 'constrints':{'used':'Email ya registrado'}}]},
                     HttpStatus.BAD_REQUEST, { cause: new Error('') });
                } else {
                    throw new HttpException('Error', HttpStatus.BAD_REQUEST, { cause: new Error('') });
                }
            } else {
                throw new HttpException(error, HttpStatus.BAD_REQUEST, { cause: new Error('') });
            }
        }
    }

    async confirmEmail(token:string, user:User){
        if(user.remember_token !== token){
            throw new Error('Token inválido');
        }
        if(user.email_verified){
            throw new Error('Ya ha validado su correo electrónico');
        }
        try{
            await this.dbService.user.update({
                where:{id:user.id},
                data:{remember_token:null, email_verified:1}
            });
            return {message:'Email confirmado', status:HttpStatus.OK};
        } catch(error) {
            throw new HttpException({'message':[{'constrints':{'not-found':error}}]},HttpStatus.BAD_REQUEST);
        }
    }

    async resendConfirm(user : User){
        try {
            const token = await this.signToken(user.email);
            await this.dbService.user.update({
                where:{id:user.id},
                data:{remember_token:token}
            });
            const url = `${this.config.get('APP_URL')}auth/confirm?token=${token}`;
            await this.mailService.sendEmail(user.email, EmailTemplates.CONFIRM_EMAIL,{name:user.name, url});
            return {message:'Email reenviado', status:HttpStatus.OK}
        } catch(error){
            throw new HttpException({'message':[{'constrints':{'error':error}}]},HttpStatus.BAD_REQUEST);
        }
    }

    private async createUserName(name: string, last_name: string) : Promise<string> {
        const usern = name[0].toLowerCase().concat(last_name.toLowerCase());
        const query = `${usern}%`;
        const users = await this.dbService.$queryRaw`
                SELECT COUNT(*) as count
                FROM User
                WHERE username LIKE ${query};
            `;
        return usern.concat(users[0].count);
    }

    private async getUserByEmail(userEmail : string){
        try{
            const user = await this.dbService.user.findFirstOrThrow(
                {where:{
                    email:userEmail,
                    AND:{deleted:0}
                }}
            );
            return user;
        } catch(error){
            throw new HttpException({'message':[{'constrints':{'not-found':error}}]},HttpStatus.BAD_REQUEST);
        }
    }

    private async generateArgonPassword(plainPassword:string){
        const argon2 = require('argon2');
        return await argon2.hash(plainPassword);
    }
}