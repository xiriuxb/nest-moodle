import { Exclude, Expose } from "class-transformer";
import { IsArray, IsString } from "class-validator";

@Exclude()
export class CursoLocalDTO{
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
    @IsString()
    overviewfiles:string
}