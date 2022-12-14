/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    category_name: string;

    @IsNotEmpty()
    solution: string;
}