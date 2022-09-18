/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class UpdateAnswerDto {
    @IsNotEmpty()
    answer_value: number;
}