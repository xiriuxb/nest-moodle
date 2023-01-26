import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "prisma/generated/nestClient";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt_query') {

    constructor (config: ConfigService, private dbService:DatabaseService){
        super({
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
            secretOrKey: config.get('JWT_SECRET'),
        })
    }

    async validate(payload:{userEmail:string}):Promise<any>{
        try{
            const user = await this.dbService.user.findFirstOrThrow(
                {where:{
                    email:payload.userEmail,
                    AND:{deleted:0}
                },
                select:{
                    id:true,
                    email:true,
                    deleted:true,
                    password:true,
                    roles:true,
                }}
            );
            return user;
        } catch(error){
            throw new HttpException({'message':[{'constrints':{'not-found':error}}]},HttpStatus.BAD_REQUEST);
        }
    }
}