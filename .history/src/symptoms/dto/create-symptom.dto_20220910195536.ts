/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateSymptomDto {
    @IsNotEmpty()
    symptoms_name: string;
}