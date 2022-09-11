/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
// import { CreateSymptomDto } from './dto/create-symptom.dto';
import { GetProfilesFilterDto } from './dto/get-profiles-filter.dto';
import { Profile } from './profile.entity';

@EntityRepository(Profile)
export class ProfilesRepository extends Repository<Profile> {
  // private logger = new Logger('TasksRepository', true);

  async getSymptoms(filterDto: GetProfilesFilterDto): Promise<Symptom[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('profile');
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

  async createSymptom(createSymptomDto: CreateSymptomDto): Promise<Symptom> {
    const { symptoms_name } = createSymptomDto;

    const symptom = this.create({
      symptoms_name
    });

    await this.save(symptom);
    return symptom;
  }

}
