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