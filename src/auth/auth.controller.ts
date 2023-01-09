import { Body, Controller, Logger, Post, Query, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { ResetNewPasswordDTO, ResetPasswordDTO, SigninDTO, UserRegisterDto } from "./auth.dto";
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

    @Post('send_reset_mail')
    sendPsswrdReset(@Body() dto:ResetPasswordDTO){
        return this.authService.sendResetPassword(dto);
    }

    @Post('password_reset')
    @UseGuards(AuthGuard('jwt_reset_password'))
    psswrdReset(
        @Body() dto:ResetNewPasswordDTO,
        @Query('token') token:string,
        @Req() req:Request
    ){
        return this.authService.resetPassword(dto, token, req.user['email']);
    }

    @Post('register')
    register(@Body() userRegisterDto: UserRegisterDto){
      return this.authService.register(userRegisterDto);
    }

    @Post('confirm')
    @UseGuards(AuthGuard('jwt_reset_password'))
    confirmEmail(
        @Query('token') token:string,
        @Req() req:Request
    ){
        return this.authService.confirmEmail(token, req.user['email']);
    }

}