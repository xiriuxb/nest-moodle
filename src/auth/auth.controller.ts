import { Body, Controller, Logger, Post, Query, Req, UseGuards } from "@nestjs/common";
import { User } from "prisma/generated/nestClient";
import { ResetNewPasswordDTO, ResetPasswordDTO, SigninDTO, UserRegisterDto } from "./auth.dto";
import { AuthService } from "./auth.service";
import { GetUser } from "./decorator/get-user.decorator";
import { JwtGuardQuery } from "./guards/jwt.guard";
import { JwtGuardBearer } from "./guards/jwt_bearer.guard";

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
    @UseGuards(JwtGuardQuery)
    psswrdReset(
        @Body() dto:ResetNewPasswordDTO,
        @Query('token') token:string,
        @GetUser() user:User
    ){
        return this.authService.resetPassword(dto, token, user.email);
    }

    @Post('register')
    register(@Body() userRegisterDto: UserRegisterDto){
      return this.authService.register(userRegisterDto);
    }

    @Post('confirm')
    @UseGuards(JwtGuardQuery)
    confirmEmail(
        @Query('token') token:string,
        @GetUser() user:User,
    ){
        return this.authService.confirmEmail(token, user);
    }

    @Post('confirm/resend')
    @UseGuards(JwtGuardBearer)
    resendConfirmEmail(
        @GetUser() user:User,
    ){
        return this.authService.resendConfirm(user);
    }

}