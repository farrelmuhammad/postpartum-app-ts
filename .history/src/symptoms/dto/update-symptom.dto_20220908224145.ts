/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class UpdateSymptomDto {
    @IsNotEmpty()
    symptoms_name: string;
}