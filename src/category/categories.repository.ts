/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { GetCategoriesFilterDto } from "./dto/get-categories-filter.dto";

@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {
    async getCategories(filterDto: GetCategoriesFilterDto): Promise<Category[]> {
        const { search } = filterDto;

        const query = this.createQueryBuilder('category');

        if (search) {
            query.andWhere(
                '(LOWER(symptom.symptoms_name) LIKE LOWER(:search))',
                { search: `%${search}%` },
            );
        }

        const categories = await query.getMany();
        return categories;
    }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { category_name } = createCategoryDto;

        const category = this.create({
            category_name
        });

        await this.save(category);
        return category;
    }
}