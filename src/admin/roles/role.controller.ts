import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";
import { RoleServie } from "./role.service";

@ApiTags('admin/roles')
@Controller('admin/roles')
export class RoleController{
    constructor(
        private roleService:RoleServie
    ){}

    @Post('/')
    createRole(
        @Body() dto:CreateRoleDto
    ){
        return this.roleService.createRole(dto);
    }

    @Get('/')
    getRoles(){
        return this.roleService.getRoles();
    }

    @Patch('/:id')
    updateRole(
        @Body() updateDto:UpdateRoleDto,
        @Param('id', ParseIntPipe) roleId : number
    ){
        return this.roleService.updateRole(updateDto, roleId);
    }
}