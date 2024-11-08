import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreatePermissionDto } from './permission.dto';

@Injectable()
export class PermissionService {
  constructor(private readonly dbService: DatabaseService) {}

  async createPermission(createDto: CreatePermissionDto) {
    const existringPermission = await this.findPermissionByName(createDto.name);
    if (existringPermission) {
      throw new BadRequestException('Permission already exists');
    }
    return await this.dbService.permission.create({ data: createDto });
  }

  findPermissionByName(permissionName: string) {
    return this.dbService.permission.findFirst({
      where: { name: permissionName },
    });
  }

  async getPermissionByNameOrThrow(permissionName: string) {
    const permission = await this.findPermissionByName(permissionName);

    if (!permission) {
      throw new NotFoundException('Permission not found');
    }
    return permission;
  }

  async findAllPermissions() {
    return await this.dbService.permission.findMany();
  }
}
