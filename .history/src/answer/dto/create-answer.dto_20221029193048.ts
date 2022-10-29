/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateAnswerDto {
    @IsNotEmpty()
    answer_name: string;

    @IsNotEmpty()
    md_user: number;
}