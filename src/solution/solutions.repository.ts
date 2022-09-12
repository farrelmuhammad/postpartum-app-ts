/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { GetSolutionsFilterDto } from './dto/get-solutions-filter.dto';
import { Solution } from './solution.entity';


@EntityRepository(Solution)
export class SolutionsRepository extends Repository<Solution> {
  // private logger = new Logger('TasksRepository', true);

  async getSolutions(filterDto: GetSolutionsFilterDto): Promise<Solution[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('solution');
    // query.where({ user });

    if (search) {
      query.andWhere(
        '(LOWER(solution.solution) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const solutions = await query.getMany();
    return solutions;

    // try {
    //   const tasks = await query.getMany();
    //   return tasks;
    // } catch (error) {
    //   this.logger.error(
    //     `Failed to get tasks for user "${
    //       user.username
    //     }". Filters: ${JSON.stringify(filterDto)}`,
    //     error.stack,
    //   );
    //   throw new InternalServerErrorException();
    // }
  }

  async createSolution(createSolutionDto: CreateSolutionDto): Promise<Solution> {
    const { solution } = createSolutionDto;

    const solutions = this.create({
        solution
    });

    await this.save(solutions);
    return solutions;
  }

}
