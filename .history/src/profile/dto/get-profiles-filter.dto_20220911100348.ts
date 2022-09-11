/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";

export class GetProfilesFilterDto {
    @IsOptional()
    @IsString()
    search: string;
}