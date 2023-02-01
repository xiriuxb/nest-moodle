import { Type } from "class-transformer";
import { IsIn, IsNotEmpty } from "class-validator";

export class UpdatePayMathodDto{
    @IsIn([0,1], {message:'Debe ser 0 o 1'})
    @IsNotEmpty({message:'Es obligatorio'})
    @Type(()=>Number)
    active:number;
}