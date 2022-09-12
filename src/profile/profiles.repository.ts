/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
// import { CreateSymptomDto } from './dto/create-symptom.dto';
import { GetProfilesFilterDto } from './dto/get-profiles-filter.dto';
import { Profile } from './profile.entity';
import { ProfileGender, ProfileProfession, ProfileStudyLevel } from './profile.enum';

@EntityRepository(Profile)
export class ProfilesRepository extends Repository<Profile> {
  // private logger = new Logger('TasksRepository', true);

  async getProfiles(filterDto: GetProfilesFilterDto): Promise<Profile[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('profile');
    // query.where({ user });

    if (search) {
      query.andWhere('(LOWER(profile.name) LIKE LOWER(:search))', {
        search: `%${search}%`,
      });
    }

    const profiles = await query.getMany();
    return profiles;

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

  async createProfiles(createProfileDto: CreateProfileDto): Promise<Profile> {
    const {
      name,
      address,
      city,
      province,
      phone,
      birth_place,
      date,
      // gender,
      // profession,
      // study_level,
    } = createProfileDto;

    const profile = this.create({
      name,
      address,
      city,
      province,
      phone,
      birth_place,
      date,
      gender: ProfileGender,
      profession: ProfileProfession,
      study_level: ProfileStudyLevel,
    });

    await this.save(profile);
    return profile;
  }
}
