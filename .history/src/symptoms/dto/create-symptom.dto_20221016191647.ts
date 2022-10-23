/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateSymptomDto {
    @IsNotEmpty()
    symptoms_name: string;

    @IsNotEmpty()
    CF_user: number;
}