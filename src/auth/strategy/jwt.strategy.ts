import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt_reset_password') {

    constructor (config: ConfigService, private dbService:DatabaseService){
        super({
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
            secretOrKey: config.get('JWT_SECRET'),
        })
    }

    validate(payload:{email:string}){
        return {email:payload.email};
    }
}