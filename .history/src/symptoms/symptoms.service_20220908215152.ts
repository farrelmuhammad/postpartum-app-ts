/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSymptomDto } from "./dto/create-symptom.dto";
import { Symptom } from "./symptom.entity";
import { SymptomsRepository } from "./symptoms.repository";

export class SymptomsService {
    constructor(
        @InjectRepository(SymptomsRepository)
        private symptomsRepository: SymptomsRepository,
    ) { }

    // getSymptoms(): Promise<Symptom[]> {
    //     return this.symptomsRepository.getSymptoms();
    // }

    async getTaskById(
        id: string, 
        // user: User
        ): Promise<Symptom> {
        const found = await this.symptomsRepository.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;

    }

    // createTask(
    //     createSymptomDto: CreateSymptomDto, 
    //     // user: User
    //     ): Promise<Symptom> {
    //     return this.symptomsRepository.createSymptom(createSymptomDto);
    // }

    async deleteTask(
        id: string, 
        // user: User
        ): Promise<void> {
        const result = await this.symptomsRepository.delete({ id });

        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

    async updateTaskStatus(
        id: string,
        // status: TaskStatus,
        // user: User
    ): Promise<Symptom> {
        const task = await this.getTaskById(id);

        // task.status = status;
        // await this.symptomsRepository.save(symptom);

        return task;
    }
}