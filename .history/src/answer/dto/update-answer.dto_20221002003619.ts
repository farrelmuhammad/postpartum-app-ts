/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class UpdateAnswerDto {
    @IsNotEmpty()
    answer_name: string;

    @IsNotEmpty()
    answer_value: number;
}