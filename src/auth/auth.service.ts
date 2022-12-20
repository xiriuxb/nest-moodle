import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { DatabaseService } from "src/database/database.service";
import { SigninDTO } from "./auth.dto";

@Injectable()
export class AuthService{
    constructor (
        private dbService: DatabaseService, 
        private jwtService:JwtService,
        private config: ConfigService
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
            return {'token': token};
        } catch (error) {
            throw new HttpException({'message':[{'constrints':{'not-found':'Email o contraseña incorrecto(s)'}}]},HttpStatus.BAD_REQUEST);
        }
    }

    async signToken(userId:number, email: string):Promise<string>{
        const payload = {
            sub:userId,
            email
        }
        return await this.jwtService.signAsync(payload, {
            expiresIn: '15m',
            secret: this.config.get('JWT_SECRET')
        });
    }
}