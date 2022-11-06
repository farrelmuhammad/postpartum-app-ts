/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ProfileGender, ProfileProfession, ProfileStudyLevel } from "../profile.enum";

export class CreateProfileDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    province: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    phone: string;

    @IsNotEmpty()
    @Type(() => Date)
    // @IsEnum(Date)
    birth_date: Date;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    age: number;
}