import { Exclude, Expose, Type } from "class-transformer";
import { IsArray, IsIn, IsString } from "class-validator";
@Exclude()
export class CursoLocalFromMdlDto{
    @Expose()
    @IsString()
    fullname:string;
    @Expose()
    @IsString()
    shortname:string;
    @Expose()
    @IsString()
    categoryname:string;
    @Expose()
    @IsString()
    summary:string;
    @Expose()
    @IsArray()
    overviewfiles:[{}]
}

export class SetUnsetDto{
    @IsIn([0,1],{message:'Debe ser 1 o 0'})
    @Type(()=>Number)
    destacado:number
}