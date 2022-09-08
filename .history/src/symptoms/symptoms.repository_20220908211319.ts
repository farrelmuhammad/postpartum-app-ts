/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Symptom } from './symptom.entity';

export class SymptomsRepository extends Repository<Symptom> {
  async getSymptoms(): Promise<Symptom[]> {}
}
