/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Answer } from "./answer.entity";
import { AnswersRepository } from "./answers.repository";
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
}