/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { CreateSymptomDto } from './dto/create-symptom.dto';
import { Symptom } from './symptom.entity';

export class SymptomsRepository extends Repository<Symptom> {
  // async getSymptoms(): Promise<Symptom[]> { }

  // async createSymptom(
  //   createSymptomDto: CreateSymptomDto, 
  //   // user: User
  //   ): Promise<Symptom> {}

  }
