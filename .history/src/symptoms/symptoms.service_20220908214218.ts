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

    getSymptoms(): Promise<Symptom[]> {
        return this.symptomsRepository.getSymptoms();
    }

    async getTaskById(id: string, user: User): Promise<Task> {
        const found = await this.symptomsRepository.findOne({ where: { id, user } });

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;

    }

    createTask(createSymptomDto: CreateSymptomDto, user: User): Promise<Task> {
        return this.symptomsRepository.createSymptom(createSymptomDto, user);
    }

    async deleteTask(
        id: string, 
        // user: User
        ): Promise<void> {
        const result = await this.symptomsRepository.delete({ id, user });

        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

    async updateTaskStatus(
        id: string,
        // status: TaskStatus,
        // user: User
    ): Promise<Task> {
        const task = await this.getTaskById(id, user);

        task.status = status;
        await this.symptomsRepository.save(task);

        return task;
    }
}