import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { Exception } from 'handlebars';
import { Prisma } from 'prisma/generated/nestClient';
import { RoleController } from 'src/admin/roles/role.controller';
import { CreateRoleDto } from 'src/admin/roles/role.dto';
import { RoleService } from 'src/admin/roles/role.service';
import { DatabaseService } from 'src/database/database.service';

describe('RoleController', () => {
  let controller: RoleController;
  let roleService: RoleService;
  let baseService: DatabaseService;

  const role = {
    id: 1,
    name: 'user',
    active: 1,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: null,
    updated_by: null,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [RoleService, DatabaseService, ConfigService],
    }).compile();

    controller = module.get<RoleController>(RoleController);
    roleService = module.get<RoleService>(RoleService);
    baseService = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('debería crear un rol correctamente', async () => {
    const dto: CreateRoleDto = { name: 'user' };

    jest.spyOn(roleService, 'createRole').mockResolvedValue(role);

    const result = await controller.createRole(dto);
    expect(result).toEqual(role);
    expect(roleService.createRole).toHaveBeenCalledWith(dto);
  });

  it('debería lanzar una BadRequestException si el rol ya existe', async () => {
    const dto: CreateRoleDto = { name: 'Admin' };

    jest.spyOn(roleService, 'createRole').mockRejectedValue(() => {
      throw new BadRequestException({ name: ['Role name already exists'] });
    });
    await expect(controller.createRole(dto)).rejects.toThrow(
      BadRequestException,
    );
  });

  it('debería lanzar una BadRequestException si el rol ya existe(alt)', async () => {
    const dto: CreateRoleDto = { name: 'Admin' };

    jest.spyOn(roleService, 'createRole').mockImplementation(() => {
      throw new BadRequestException({ name: ['Role name already exists'] });
    });

    try {
      await controller.createRole(dto);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
  });

  // it('debería retornar un InternalSererError si hay un error en la base', async () => {
  //   const dto: CreateRoleDto = { name: 'asdasdsdmin' };

  //   jest.spyOn(baseService.role, 'create').mockImplementation(() => {
  //     throw new Exception('sA')
  //   });

  //   // try{
  //   //   await controller.createRole(dto);
  //   // } catch(error){
  //   //   expect(error).toBeInstanceOf(InternalServerErrorException)
  //   // }

  //   await expect(controller.createRole(dto)).rejects.toThrow(
  //     InternalServerErrorException,
  //   );
  // });
});
