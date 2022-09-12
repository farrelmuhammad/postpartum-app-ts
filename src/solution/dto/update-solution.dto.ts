/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class UpdateSolutionDto {
    @IsNotEmpty()
    solution: string;
}