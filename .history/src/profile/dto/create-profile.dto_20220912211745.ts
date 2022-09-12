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
    birth_place: string;

    @IsNotEmpty()
    @Type(() => Date)
    // @IsEnum(Date)
    birth_date: Date;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    profession: string;

    @IsNotEmpty()
    study_level: string;

    // @IsNotEmpty()
    // @IsEnum(ProfileGender)
    // gender: ProfileGender;

    // @IsNotEmpty()
    // @IsEnum(ProfileProfession)
    // profession: ProfileProfession;

    // @IsNotEmpty()
    // @IsEnum(ProfileStudyLevel)
    // study_level: ProfileStudyLevel;
}