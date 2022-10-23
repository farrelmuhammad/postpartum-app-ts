/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class UpdateAnswerDto {
    @IsNotEmpty()
    answer: string;

    @IsNotEmpty()
    answer_value: number;
}