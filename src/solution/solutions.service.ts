/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { CreateSolutionDto } from "./dto/create-solution.dto";
import { GetSolutionsFilterDto } from "./dto/get-solutions-filter.dto";
import { Solution } from "./solution.entity";
import { SolutionsRepository } from "./solutions.repository";

export class SolutionsService {
    constructor(
        @InjectRepository(SolutionsRepository)
        private solutionsRepository: SolutionsRepository,
    ) { }

    getSolutions(filterDto: GetSolutionsFilterDto): Promise<Solution[]> {
        return this.solutionsRepository.getSolutions(filterDto);
    }

    async getSolutionById(
        id: string, 
        // user: User
        ): Promise<Solution> {
        const found = await this.solutionsRepository.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Solution with ID "${id}" not found`);
        }

        return found;
    }

    createSolution(
        createSolutionDto: CreateSolutionDto, 
        // user: User
        ): Promise<Solution> {
        return this.solutionsRepository.createSolution(createSolutionDto);
    }

    async deleteSolution(
        id: string, 
        ): Promise<void> {
        const result = await this.solutionsRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Solution with ID "${id}" not found`);
        }
    }

    async updateSolution(
        id: string,
    ): Promise<Solution> {
        const solution = await this.getSolutionById(id);

        // Symptom.status = status;
        await this.solutionsRepository.save(solution);

        return solution;
    }
}