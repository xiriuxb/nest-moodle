import { Type } from "class-transformer";
import { IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateTestimoniallDTO{
    @IsString({message:'Solo se aceptan letras'})
    @MaxLength(128,{message:'Se acepta un máximo de 128 caracteres'})
    author:string;
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
    @IsBoolean({message:'Debe ser un booleano'})
    @Type(()=>Boolean)
    active?:boolean;
}