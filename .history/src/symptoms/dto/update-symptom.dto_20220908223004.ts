/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class UpdateTaskStatusDto {
    @IsNotEmpty()
    symptoms_name: string;
}