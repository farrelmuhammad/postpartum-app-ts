/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesRepository } from "./categories.repository";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { GetCategoriesFilterDto } from "./dto/get-categories-filter.dto";

export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesRepository)
        private categoriesRepository: CategoriesRepository,
    ) { }

    getCategories(filterDto: GetCategoriesFilterDto): Promise<Category[]> {
        return this.categoriesRepository.getCategories(filterDto);
    }

    async getCategoryById(
        id: string,
    ): Promise<Category> {
        const found = await this.categoriesRepository.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Category with ID "${id}" not found`);
        }

        return found;
    }

    createCategory(
        createCategoryDto: CreateCategoryDto,
    ): Promise<Category> {
        return this.categoriesRepository.createCategory(createCategoryDto);
    }

    async deleteCategory(
        id: string,
    ): Promise<void> {
        const result = await this. categoriesRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Category with ID "${id}" not found`)
        }
    }

    async updateCategory(
        id: string,
    ): Promise<Category> {
        const category = await this.getCategoryById(id);

        await this.categoriesRepository.save(category);

        return category;
    }
}