/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString } from 'class-validator';
// import { TaskStatus } from '../task-status.enum';

export class GetAnswersFilterDto {
    //   @IsOptional()
    //   @IsEnum(TaskStatus)
    //   status: TaskStatus;

    @IsOptional()
    @IsString()
    search: string;
}
