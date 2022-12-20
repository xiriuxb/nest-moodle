import { IsEmail, IsNotEmpty } from "class-validator";

export class SigninDTO {
    @IsNotEmpty({message:'Campo requerido.'})
    @IsEmail({},{message:'Email no válido'})
    email:string;
    @IsNotEmpty({message:'Campo requerido.'})
    password:string;
}