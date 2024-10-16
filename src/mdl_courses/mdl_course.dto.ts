import { Exclude, Expose, Type } from "class-transformer";
import { IsArray, IsInt, IsNumber, IsString, Max, Min } from "class-validator";

export class GetAllMdlCoursesDTO{
    @IsInt({message:'Debe ser un número'})
    @Min(1,{message:'Debe ser mayor a 1'})
    @Type(()=>Number)
    page:number;
    @IsInt({message:'Debe ser un número'})
    @Min(1,{message:'Debe ser mayor a 1'})
    @Max(100,{message:'Debe ser menor a 100'})
    @Type(()=>Number)
    take:number;
}