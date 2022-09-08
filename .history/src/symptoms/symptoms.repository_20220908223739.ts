/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSymptomDto } from './dto/create-symptom.dto';
import { GetSymptomsFilterDto } from './dto/get-symptoms-filter.dto';
import { Symptom } from './symptom.entity';

@EntityRepository(Symptom)
export class SymptomsRepository extends Repository<Symptom> {
  // private logger = new Logger('TasksRepository', true);

  async getTasks(filterDto: GetSymptomsFilterDto): Promise<Symptom[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('task');
    // query.where({ user });

    if (search) {
      query.andWhere(
        '(LOWER(symptom.symptoms_name) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const symptoms = await query.getMany();
    return symptoms;

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

  async createTask(createSymptomDto: CreateSymptomDto): Promise<Symptom> {
    const { symptoms_name } = createSymptomDto;

    const symptom = this.create({
      symptoms_name
    });

    await this.save(symptom);
    return symptom;
  }

}
