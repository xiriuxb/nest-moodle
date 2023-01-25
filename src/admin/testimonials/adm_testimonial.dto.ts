import { Type } from "class-transformer";
import { IsBoolean, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateTestimoniallDTO{
    @IsNotEmpty({message:'Campo requerido.'})
    @IsString({message:'Solo se aceptan letras'})
    @MaxLength(128,{message:'Se acepta un máximo de 128 caracteres'})
    author:string;
    @IsNotEmpty({message:'Campo requerido.'})
    @IsString({message:'Solo se aceptan letras y números'})
    @MaxLength(256,{message:'S3 acepta un máximo de 256 caracteres'})
    text:string;
}

export class UpdateTestimoniallDTO{
    @IsString({message:'Solo se aceptan letras'})
    @MaxLength(128,{message:'Se acepta un máximo de 128 caracteres'})
    @IsOptional()
    author?:string;
    @IsString({message:'Solo se aceptan letras y números'})
    @MaxLength(256,{message:'S3 acepta un máximo de 256 caracteres'})
    @IsOptional()
    text?:string;
    @IsOptional()
    @IsIn([0,1],{message:'Deben ser los valores 0 o 1'})
    @Type(()=>Number)
    active?:number;
}