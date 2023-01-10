import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt_query') {

    constructor (config: ConfigService, private dbService:DatabaseService){
        super({
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
            secretOrKey: config.get('JWT_SECRET'),
        })
    }

    async validate(payload:{userEmail:string}):Promise<User>{
        try{
            const user = await this.dbService.user.findFirstOrThrow(
                {where:{
                    email:payload.userEmail,
                    AND:{deleted:false}
                }}
            );
            delete user.password;
            return user;
        } catch(error){
            throw new HttpException({'message':[{'constrints':{'not-found':error}}]},HttpStatus.BAD_REQUEST);
        }
    }
}