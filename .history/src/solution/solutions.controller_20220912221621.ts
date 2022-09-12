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
import { Logger } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { GetSolutionsFilterDto } from './dto/get-solutions-filter.dto';
import { Solution } from './solution.entity';
import { SolutionsService } from './solutions.service';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';

@Controller('solutions')
@UseGuards(AuthGuard())
export class SolutionsController {
    // private logger = new Logger('TasksController');

    constructor(private solutionsService: SolutionsService) { }

    @Get()
    getSolutions(
        @Query() filterDto: GetSolutionsFilterDto,
    ): Promise<Solution[]> {
        // this.logger.verbose(
        //   `User "${user.username}" retrieving all tasks. Filters: ${JSON.stringify(
        //     filterDto,
        //   )}`,
        // );
        return this.solutionsService.getSolutions(filterDto);
    }

    @Get('/:id')
    getSymptomById(@Param('id') id: string): Promise<Solution> {
        return this.solutionsService.getSolutionsById(id);
    }

    @Post()
    createSolution(
        @Body() createSolutionDto: CreateSolutionDto,
    ): Promise<Solution> {
        // this.logger.verbose(
        //   `User "${user.username}" creating a new tasks. Data: ${JSON.stringify(
        //     createTaskDto,
        //   )}`,
        // );
        return this.solutionsService.createSolution(createSolutionDto);
    }

    @Delete('/:id')
    deleteSymptom(@Param('id') id: string): Promise<void> {
        return this.solutionsService.deleteSolution(id);
    }

    @Patch('/:id')
    updateSymptom(
        @Param('id') id: string,
        @Body() updateSolutionDto: UpdateSolutionDto,
    ): Promise<Solution> {
        // const { symptoms_name } = updateSymptomDto;
        return this.solutionsService.updateSolution(id);
    }

}