/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { Symptom } from "./symptom.entity";
import { SymptomsRepository } from "./symptoms.repository";

export class SymptomsService {
    constructor(
        @InjectRepository(SymptomsRepository)
        private symptomsRepository: SymptomsRepository,
    ) {}

    getSymptoms(): Promise<Symptom[]> {
        return this.symptomsRepository.getSymptoms();
    }
}