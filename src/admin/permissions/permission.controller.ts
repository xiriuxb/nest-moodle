import { ApiTags } from "@nestjs/swagger";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { PermissionService } from "./permission.service";
import { CreatePermissionDto } from "./permission.dto";

@ApiTags('admin/permissions')
@Controller('admin/permissions')
export class PermissionController{
  constructor (private readonly service: PermissionService){}

  @Get('/')
  getAllPermissions(){
    return this.service.findAllPermissions();
  }

  @Post('/')
  createPermission(
    @Body() createDto:CreatePermissionDto
  ){
    return this.service.createPermission(createDto);
  }
}