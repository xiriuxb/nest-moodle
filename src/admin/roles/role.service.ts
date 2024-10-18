import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(private dbService: DatabaseService) {}

  async createRole(dto: CreateRoleDto, userId: number = 1) {


    return await this.dbService.role.create({
      data: {
        name: dto.name,
        created_by: userId,
      },
    });
  }

  async getRoles() {
    return await this.dbService.role.findMany();
  }

  async updateRole(dto: UpdateRoleDto, roleId: number, userId: number) {
    await this.getRoleByOrThrow({ id: roleId });
    return await this.dbService.role.update({
      where: { id: roleId },
      data: {
        active: dto.active,
        updated_by: userId,
      },
    });
  }

  async getRoleByOrThrow({ id, name }: { id?: number; name?: string }) {
    let role: Role | null = null;
    if (name) {
      role = await this.findRoleByName(name);
    }
    role = await this.findRoleById(id);
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    return role;
  }

  findRoleByName(name: string) {
    const role = this.dbService.role.findFirst({ where: { name } });
    return role;
  }

  findRoleById(id: number) {
    return this.dbService.role.findFirst({ where: { id } });
  }
}
