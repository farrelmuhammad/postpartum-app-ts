/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class UpdateCategoryDto {
    @IsNotEmpty()
    category_name: string;
}