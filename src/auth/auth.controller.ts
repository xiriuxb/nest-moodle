import { Body, Controller, Post } from "@nestjs/common";
import { SigninDTO } from "./auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signin')
    login (
        @Body() dto:SigninDTO,
    ){
        return this.authService.login(dto);
    }

}