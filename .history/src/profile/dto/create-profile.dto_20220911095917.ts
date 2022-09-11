/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { ProfileGender, ProfileProfession, ProfileStudyLevel } from "../profile.enum";

export class CreateProfileDto {
  @IsNotEmpty()
    id: number;

  @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    province: string;

    @IsNotEmpty()
    phone: number;

    @IsNotEmpty()
    birht_place: string;
    
    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    gender: ProfileGender;

    @IsNotEmpty()
    profession: ProfileProfession;

    @IsNotEmpty()
    study_level: ProfileStudyLevel;
}