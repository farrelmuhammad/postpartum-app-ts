/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Answer } from "./answer.entity";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import { GetAnswersFilterDto } from "./dto/get-answers-filter.dto";

@EntityRepository(Answer)
export class AnswersRepository extends Repository<Answer> {
    async getAnswers(filterDto: GetAnswersFilterDto): Promise<Answer[]> {
        const { search } = filterDto;

        const query = this.createQueryBuilder('answer');

        if (search) {
            query.andWhere(
                '(LOWER(answer.answer_value) LIKE LOWER(:search))',
                { search: `%${search}%` }
            );
        }

        const answers = await query.getMany();
        return answers;
    }

    async createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer> {
        const { answer_name, CF_user } = createAnswerDto;

        const answer = this.create({
            answer_name,
            CF_user
        });

        await this.save(answer);
        return answer;
    }
}