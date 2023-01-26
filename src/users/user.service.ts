import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { ChangeEmailDto, ChangePasswordDto, DeleteProfileDto, UpdateInfoDto } from "./user.dto";

@Injectable()
export class UserService {
    constructor(private dbService: DatabaseService) { }

    async changePassword(dto:ChangePasswordDto, userId:number){
        const user = await this.dbService.user.findFirst({
            where:{id:userId}
        });
        const isValid = await this.verifyArgonPassword(dto.current_password, user.password);
        if(!isValid){
            throw new HttpException('Nel la contraseña actual no es.', HttpStatus.BAD_REQUEST);
        }
        if (dto.new_password !== dto.password_confirm){
            throw new HttpException('Las contraseñas no coinciden.', HttpStatus.BAD_REQUEST);   
        }
        if (dto.new_password == dto.current_password){
            throw new HttpException('La contraseña no puede ser igual a la anterior', HttpStatus.BAD_REQUEST);
        }
        const newPassword = await this.generateArgonPassword(dto.new_password);
        try {
            await this.dbService.user.update({
                where:{id:userId},
                data:{
                    password:newPassword,
                }
            });
            return {message:'Ok'}
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }

    }

    async changeEmail(userId:number, dto:ChangeEmailDto){
        const user = await this.dbService.user.findFirst({
            where:{id:userId}
        });
        const isValid = await this.verifyArgonPassword(dto.current_password, user.password);
        if(!isValid){
            throw new HttpException('Nel, la contraseña actual no es.', HttpStatus.BAD_REQUEST);
        }
        if(user.email == dto.new_email){
            throw new HttpException('Nel, mismo correo.', HttpStatus.BAD_REQUEST);
        }
        try{
            await this.dbService.user.update({
                where:{id:userId},
                data:{
                    email:dto.new_email,
                }
            });
            return {message:'OK'}
        } catch(error){
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async updateInfo(dto:UpdateInfoDto,userId:number){
        try {
            await this.dbService.user.update({
                where:{id:userId},
                data:{
                    birth_day:dto.birth_day,
                    country:dto.country,
                    region: dto.region,
                }
            });
            return {message:'OK'}
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async deleteProfile(dto:DeleteProfileDto,userId:number){
        const user = await this.dbService.user.findFirst({
            where:{id:userId}
        });
        const isValid = await this.verifyArgonPassword(dto.current_password, user.password);
        if(!isValid){
            throw new HttpException('Nel, la contraseña actual no es.', HttpStatus.BAD_REQUEST);
        }
        try {
            await this.dbService.user.update({
                where:{id:userId},
                data:{
                    email:user.email.concat('_deleted_',Date.now().toString()),
                    password:'deleted'.concat(Date.now().toString()),
                    deleted:1
                }
            });
            return {message:'OK'}
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyArgonPassword(plainPassword:string, hashed:string) : Promise<boolean>{
        const argon2 = require('argon2');
        return await argon2.verify(hashed,plainPassword);
        
    }

    private async generateArgonPassword(plainPassword:string){
        const argon2 = require('argon2');
        return await argon2.hash(plainPassword);
    }

}