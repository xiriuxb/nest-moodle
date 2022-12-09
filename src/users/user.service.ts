import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { UserRegisterDto } from "./user.dto";

@Injectable()
export class UserService {
    constructor (private dbService: DatabaseService){}

    async register (dto: UserRegisterDto){
        return await this.dbService.user.create({
            data:{
                name:dto.name,
                last_name:dto.last_name,
                password:dto.password,
                email:dto.email,
                username:''
            },
            select:{
                name:true,
                last_name:true,
                email:true,
                username: true
            }
        });
    }
}