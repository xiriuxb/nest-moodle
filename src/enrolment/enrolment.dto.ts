import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateEnrolmentDto{
    @IsInt({message:'Debe ser un entero'})
    @IsNotEmpty({message:'Campo obligatorio'})
    @Type(()=>Number)
    courseId : number;
}