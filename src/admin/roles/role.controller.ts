import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";
import { RoleServie } from "./role.service";

@Controller('roles')
export class RoleController{
    constructor(
        private roleService:RoleServie
    ){}

    @Post('create')
    createRole(
        @Body() dto:CreateRoleDto
    ){
        return this.roleService.createRole(dto);
    }

    @Get('all')
    getRoles(){
        return this.roleService.getRoles();
    }

    @Patch('update/:id')
    updateRole(
        @Body() updateDto:UpdateRoleDto,
        @Param('id', ParseIntPipe) roleId : number
    ){
        return this.roleService.updateRole(updateDto, roleId);
    }
}