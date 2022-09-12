/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateSolutionDto {
    @IsNotEmpty()
    solution: string;
}