import { Exclude, Expose } from "class-transformer";
import { IsArray, IsInt, IsString } from "class-validator";

@Exclude()
export class CursoLocalDTO{
    @Expose()
    @IsInt()
    moodle_id:number;
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