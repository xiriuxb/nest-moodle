import { Type } from "class-transformer";
import { IsAlpha, IsBoolean, IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class CreateRoleDto{
    @IsNotEmpty({message:'Campo requerido.'})
    @IsAlpha('es-ES',{message:'Debe contener solo letras'})
    name:  string;
}

export class UpdateRoleDto{
    @IsOptional()
    @IsIn([0,1],{message:'Deben ser los valores 0 o 1'})
    @Type(()=>Number)
    active?:number;
}