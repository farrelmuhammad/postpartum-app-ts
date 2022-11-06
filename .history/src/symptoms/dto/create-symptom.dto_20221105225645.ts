/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateSymptomDto {
    @IsNotEmpty()
    symptoms_name: string;

    @IsNotEmpty()
    mb_baby: number;

    @IsNotEmpty()
    mb_major: number;

    @IsNotEmpty()
    mb_psychosis: number;
}