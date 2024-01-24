import { IsNotEmpty, isNotEmpty, minLength } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty()
    title:string
    @IsNotEmpty()
    description:string
}
