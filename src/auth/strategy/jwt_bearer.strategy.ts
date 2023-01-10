import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class JwtStrategyBearer extends PassportStrategy(Strategy,'jwt_bearer') {

    constructor (config: ConfigService, private dbService:DatabaseService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
        })
    }

    async validate(payload:{email:string}){
        Logger.log(payload.email);
        try{
            const user = await this.dbService.user.findFirstOrThrow(
                {where:{
                    email:payload.email,
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