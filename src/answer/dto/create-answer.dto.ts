/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateAnswerDto {
    @IsNotEmpty()
    answer_value: number;
}