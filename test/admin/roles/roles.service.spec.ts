import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {Test, TestingModule} from '@nestjs/testing';
import { RoleService } from 'src/admin/roles/role.service';
import { DatabaseService } from 'src/database/database.service';


describe('RoleService', ()=>{
  let service: RoleService;
  let databaseService: DatabaseService

  const role = {
    id: 1,
    name: 'user',
    active: 1,
    created_at: new Date(),
    updated_at: new Date(),
    created_by: null,
    updated_by: null
  }

  const userId = 1;


  beforeEach(async ()=>{
    const module: TestingModule = await Test.createTestingModule({
      providers:[RoleService, DatabaseService, ConfigService]
    }).compile();

    service = module.get<RoleService>(RoleService);
    databaseService = module.get<DatabaseService>(DatabaseService);
  });


  it('should be defined', ()=>{
    expect(service).toBeDefined();
  });


  it('should return a list of roles DB', async()=>{
    const res = await service.getRoles();
    expect(Array.isArray(res)).toBe(true);
    expect(res[0].name).toBeDefined();
  });


  it('should return an array of roles', async () => {
    const roles = [role];

    jest.spyOn(databaseService.role, 'findMany').mockResolvedValue(roles);

    const result = await service.getRoles();

    expect(result).toEqual(roles);
    expect(Array.isArray(result)).toBe(true);
  });


  it('should return a role if exists, by name', async()=>{

    jest.spyOn(databaseService.role, 'findFirst').mockResolvedValue(role);
    const result = await service.findRoleByName('user');

    expect(result).toEqual(role);
  });


  it('shuld return null if role name doesn\'t exists', async()=>{
    jest.spyOn(databaseService.role, 'findFirst').mockResolvedValue(null);
    const result = await service.findRoleByName('userk');

    expect(result).toEqual(null);
  });


  it('should throw BadRequestException if role already exists', async () => {
    const dto = { name: 'admin' };

    jest.spyOn(service, 'findRoleByName').mockResolvedValue(role);

    try {
      await service.createRole(dto, userId);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.response.name).toEqual(['Role name already exists']);
    }
  });


  it('should create a new role if it does not exist', async () => {
    const dto = { name: 'New Role' }; 
    const newRole = {
      id: 2,
      name: 'New Role',
      created_by: userId,
      created_at: new Date(),
      updated_at: new Date(),
      active: 1,
      updated_by: null
    }

    jest.spyOn(service, 'getRoleByOrThrow').mockResolvedValue(null);

    jest.spyOn(databaseService.role, 'create').mockResolvedValue(newRole);

    const result = await service.createRole(dto, userId);

    expect(result).toEqual(newRole);
  });


  it('should return the role if exist(name) DB', async()=>{
    const roleName = 'user';
    const role = await service.getRoleByOrThrow({name:roleName});
    expect(role.name).toBe(roleName)
  });


  it('should return an error if role to update does not exists DB', async ()=>{
    const dto = {active:0};
    const roleId = 77;

    try {
      await service.updateRole(dto, roleId, userId);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });


  it('should return an error if role to update does not exists', async()=>{
    const dto = {active:0};
    const roleId = 77;

    jest.spyOn(databaseService.role, 'findFirst').mockReturnValueOnce(null);

    try {
      await service.updateRole(dto, roleId, userId);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});