import { Body, Controller, Logger, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/decorator/get-user.decorator";
import { JwtGuardBearer } from "src/auth/guards/jwt_bearer.guard";
import { ChangePasswordDto, UpdateInfoDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    public constructor(
        private readonly baseService:UserService
    ){}

    @Patch('change-password')
    @UseGuards(JwtGuardBearer)
    changePassword(
        @Body() dto:ChangePasswordDto,
        @GetUser() user:User
    ){
        return this.baseService.changePassword(dto, user.id);
    }

    @Patch('update-info')
    @UseGuards(JwtGuardBearer)
    updateInfo(
        @Body() dto:UpdateInfoDto,
        @GetUser() user:User
    ){
        Logger.log(JSON.stringify(dto))
        return this.baseService.updateInfo(dto, user.id);
    }
}