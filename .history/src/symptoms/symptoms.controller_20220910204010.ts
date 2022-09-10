/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Delete,
    Patch,
    Query,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { SymptomsService } from './symptoms.service';
import { Logger } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { GetSymptomsFilterDto } from './dto/get-symptoms-filter.dto';
import { UpdateSymptomDto } from './dto/update-symptom.dto';
import { Symptom } from './symptom.entity';
import { CreateSymptomDto } from './dto/create-symptom.dto';

@Controller('symptoms')
@UseGuards(AuthGuard())
export class SymptomsController {
    // private logger = new Logger('TasksController');

    constructor(private symptomsService: SymptomsService) { }

    @Get()
    getSymptoms(
        @Query() filterDto: GetSymptomsFilterDto,
    ): Promise<Symptom[]> {
        // this.logger.verbose(
        //   `User "${user.username}" retrieving all tasks. Filters: ${JSON.stringify(
        //     filterDto,
        //   )}`,
        // );
        return this.symptomsService.getSymptoms(filterDto);
    }

    @Get('/:id')
    getSymptomById(@Param('id') id: string): Promise<Symptom> {
        return this.symptomsService.getSymptomById(id);
    }

    @Post()
    createSymptom(
        @Body() createSymptomDto: CreateSymptomDto,
    ): Promise<Symptom> {
        // this.logger.verbose(
        //   `User "${user.username}" creating a new tasks. Data: ${JSON.stringify(
        //     createTaskDto,
        //   )}`,
        // );
        return this.symptomsService.createSymptom(createSymptomDto);
    }

    @Delete('/:id')
    deleteSymptom(@Param('id') id: string): Promise<void> {
        return this.symptomsService.deleteSymptom(id);
    }

    @Patch('/:id/status')
    updateSymptom(
        @Param('id') id: string,
        @Body() updateSymptomDto: UpdateSymptomDto,
    ): Promise<Symptom> {
        // const { symptoms_name } = updateSymptomDto;
        return this.symptomsService.updateSymptom(id);
    }

}