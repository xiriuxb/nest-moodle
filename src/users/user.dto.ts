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

export class ChangePasswordDto{
    @IsNotEmpty({message:'Campo requerido.'})
    @IsString({message:'Debe ser un string'})
    current_password:string;
    @IsNotEmpty({message:'Campo requerido.'})
    @IsString({message:'Debe ser un string'})
    @MinLength(8,{message:'Debe tener por lo menos 8 caracteres'})
    new_password:string;
    @IsNotEmpty({message:'Campo requerido.'})
    @IsString({message:'Debe ser un string'})
    password_confirm:string;
}