/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answer } from "./answer.entity";
import { AnswersRepository } from "./answers.repository";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { GetAnswersFilterDto } from "./dto/get-answers-filter.dto";

export class AnswersService {
    constructor(
        @InjectRepository(AnswersRepository)
        private answersRepository: AnswersRepository,
    ) {}

    getAnswers(filterDto: GetAnswersFilterDto): Promise<Answer[]> {
        return this.answersRepository.getAnswers(filterDto);
    }

    async getAnswersById(
        id: number,
    ): Promise<Answer> {
        const found = await this.answersRepository.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Answer with ID "${id}" not found`);
        }

        return found;
    }

    createAnswer(
        createAnswerDto: CreateAnswerDto,
    ): Promise<Answer> {
        return this.answersRepository.createAnswer(createAnswerDto);
    }

    async deleteAnswer(
        id: number,
    ): Promise<void> {
        const result = await this.answersRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Answer with ID "${id}" not found`);
        }
    }

    async updateAnswer(
        id: number,
    ): Promise<Answer> {
        const answer = await this.getAnswersById(id);

        await this.answersRepository.save(answer);

        return answer;
    }
}