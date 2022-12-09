import { IsNotEmpty, IsEmail, IsAlpha, IsString, MinLength } from 'class-validator';

export class UserDto {
    id : number;
    name : string;
    last_name : string;
    email : string;
    email_verified : boolean;
    password : string;
    country : string;
    region : string;
    username : string;
    birth_day : string;
    deleted : boolean;
}

export class UserRegisterDto {
    @IsNotEmpty({message:'Campo requerido.'})
    @IsAlpha('en-US', {message:'Solo se aceptan letras.'})
    name : string;
    @IsNotEmpty({message:'Campo requerido'})
    @IsAlpha('en-US', {message:'Solo se aceptan letras.'})
    last_name : string;
    @IsNotEmpty({message:'Campo requerido.'})
    @IsEmail({},{message:'Email no válido'})
    email : string;
    @IsNotEmpty({message:'Campo requerido.'})
    @MinLength(8, {message:'Debe tener mínimo 8 caracteres.'})
    password : string;
}