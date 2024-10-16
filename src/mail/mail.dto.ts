import { IsAlpha, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class MailContextVariablesDTO{
    @IsAlpha('en-US')
    @IsNotEmpty()
    name:string;
    @IsString()
    @IsOptional()
    url?:string;
}