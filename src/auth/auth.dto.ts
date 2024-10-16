import { IsAlpha, IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class SigninDTO {
    @IsNotEmpty({message:'Campo requerido.'})
    @IsEmail({},{message:'Email no válido'})
    email:string;
    @IsNotEmpty({message:'Campo requerido.'})
    password:string;
}

export class ResetPasswordDTO {
    @IsNotEmpty({message:'Campo requerido.'})
    @IsEmail({},{message:'Email no válido'})
    email:string;
}

export class ResetNewPasswordDTO {
    @IsNotEmpty({message:'Campo requerido.'})
    @MinLength(8, {message:'Debe tener mínimo 8 caracteres.'}) 
    password:string;
    @IsNotEmpty({message:'Campo requerido'})
    confirm_password:string;
}

export class UserRegisterDto {
    @IsNotEmpty({message:'Campo requerido.'})
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, {message:'Formato no válido.'})
    name : string;
    @IsNotEmpty({message:'Campo requerido'})
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, {message:'Formato no válido.'})
    last_name : string;
    @IsNotEmpty({message:'Campo requerido.'})
    @IsEmail({},{message:'Email no válido'})
    email : string;
    @IsNotEmpty({message:'Campo requerido.'})
    @MinLength(8, {message:'Debe tener mínimo 8 caracteres.'})
    password : string;
}