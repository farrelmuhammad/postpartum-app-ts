/* eslint-disable prettier/prettier */
import { Body, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { Answer } from "./answer.entity";
import { AnswersService } from "./answers.service";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { GetAnswersFilterDto } from "./dto/get-answers-filter.dto";
import { UpdateAnswerDto } from "./dto/update-answer.dto";

export class AnswersController {
    constructor(private answersService: AnswersService) {}
    
    @Get()
    getAnswers(
        @Query() filterDto: GetAnswersFilterDto,
    ): Promise<Answer[]> {
        return this.answersService.getAnswers(filterDto);
    }

    @Get('/:id')
    getAnswerById(@Param('id') id: number): Promise<Answer> {
        return this.answersService.getAnswerById(id);
    }

    @Post()
    createAnswer(
        @Body() createAnswerDto: CreateAnswerDto,
    ): Promise<Answer> {
        return this.answersService.createAnswer(createAnswerDto);
    }

    @Delete('/:id')
    deleteAnswer(@Param('id') id: number): Promise<void> {
        return this.answersService.deleteAnswer(id);
    }

    @Patch('/:id')
    updateAnswer(
        @Param('id') id: number,
        @Body() updateAnswerDto: UpdateAnswerDto
        ): Promise<Answer> {
            return this.answersService.updateAnswer(id);
        }
}