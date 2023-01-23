import { Module } from "@nestjs/common";
import { RoleController } from "./role.controller";
import { RoleServie } from "./role.service";

@Module({
    controllers:[RoleController],
    providers:[RoleServie]
})
export class RolesModule{}