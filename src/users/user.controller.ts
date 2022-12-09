import { Body, Controller, Post, Req } from "@nestjs/common";
import { UserRegisterDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    public constructor(private readonly baseService:UserService){

    }
    @Post('register')
    register(@Body() userRegisterDto: UserRegisterDto){
      return this.baseService.register(userRegisterDto);
    }
}