import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";

@Injectable()
export class RoleServie{
    constructor(
        private dbService:DatabaseService,
    ){}

    async createRole(dto:CreateRoleDto){
        try {
            return await this.dbService.role.create({
                data:{
                    name:dto.name
                }
            })
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }


    async getRoles(){
        try {
            return await this.dbService.role.findMany();
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async updateRole(dto:UpdateRoleDto, roleId:number){
        try {
            return await this.dbService.role.update({
                where:{id:roleId},
                data:{
                    active:dto.active,
                }
            });
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }


}
