import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    nama:string
    @IsEmail()
    email:string
    @IsNotEmpty()
    password:string
}
