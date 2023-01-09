import { Body, Controller, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    public constructor(private readonly baseService:UserService){

    }
}