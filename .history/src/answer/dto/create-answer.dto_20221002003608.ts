/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateAnswerDto {
    @IsNotEmpty()
    answer_name: string;

    @IsNotEmpty()
    answer_value: number;
}