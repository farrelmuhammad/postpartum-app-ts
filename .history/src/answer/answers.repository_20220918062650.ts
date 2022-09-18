/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Answer } from "./answer.entity";
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
}