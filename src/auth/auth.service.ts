import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { DatabaseService } from "src/database/database.service";
import { MailService } from "src/mail/mail.service";
import { ResetNewPasswordDTO, ResetPasswordDTO, SigninDTO } from "./auth.dto";

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
            const user = await this.dbService.user.findFirstOrThrow({
                where:{
                    email:dto.email,
                    AND:{deleted:false}
                },
            });
            if(!await argon2.verify(user.password,dto.password)){
                throw new Error();
            }

            const token = await this.signToken(user.id, user.email)
            return {token};
        } catch (error) {
            throw new HttpException({'message':[{'constrints':{'not-found':'Email o contraseña incorrecto(s)'}}]},HttpStatus.BAD_REQUEST);
        }
    }

    async signToken(userId:number, email: string):Promise<string>{
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
            const user = await this.dbService.user.findFirstOrThrow({
                where:{
                    email:dto.email,
                    AND:{deleted:false}
                },
            });
            const token = await this.signToken(user.id, user.email);
            await this.dbService.user.update({
                where: {
                  id: user.id,
                },
                data: {
                  remember_token: token,
                },
              });
            await this.mailService.sendUserResetPswrdToken(user.email, user.name,token);
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
            const user = await this.dbService.user.findUniqueOrThrow(
                {where:{
                    email:userEmail,
                }}
            );
            if(user.remember_token !== token){
                throw new Error('Token inválido');
            }
            const argon2 = require('argon2');
            const new_pass = await argon2.hash(dto.password);
            await this.dbService.user.update({
                where:{id:user.id},
                data:{password:new_pass, remember_token:null}
            })
        } catch(error) {
            throw new HttpException({'message':[{'constrints':{'not-found':error}}]},HttpStatus.BAD_REQUEST)
        }
        return {message:'Contraseña actualizada', status:HttpStatus.OK};
    }
}