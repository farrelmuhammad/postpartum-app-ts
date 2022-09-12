/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class GetSolutionsFilterDto {
  @IsOptional()
  @IsString()
  search: string;
}
