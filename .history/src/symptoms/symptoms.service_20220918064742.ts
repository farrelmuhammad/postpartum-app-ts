/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { CreateSymptomDto } from "./dto/create-symptom.dto";
import { GetSymptomsFilterDto } from "./dto/get-symptoms-filter.dto";
import { Symptom } from "./symptom.entity";
import { SymptomsRepository } from "./symptoms.repository";

export class SymptomsService {
    constructor(
        @InjectRepository(SymptomsRepository)
        private symptomsRepository: SymptomsRepository,
    ) { }

    getSymptoms(filterDto: GetSymptomsFilterDto): Promise<Symptom[]> {
        return this.symptomsRepository.getSymptoms(filterDto);
    }

    async getSymptomById(
        id: number, 
        // user: User
        ): Promise<Symptom> {
        const found = await this.symptomsRepository.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Symptom with ID "${id}" not found`);
        }

        return found;
    }

    createSymptom(
        createSymptomDto: CreateSymptomDto, 
        // user: User
        ): Promise<Symptom> {
        return this.symptomsRepository.createSymptom(createSymptomDto);
    }

    async deleteSymptom(
        id: string, 
        ): Promise<void> {
        const result = await this.symptomsRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Symptom with ID "${id}" not found`);
        }
    }

    async updateSymptom(
        id: number,
    ): Promise<Symptom> {
        const symptom = await this.getSymptomById(id);

        // Symptom.status = status;
        await this.symptomsRepository.save(symptom);

        return symptom;
    }
}