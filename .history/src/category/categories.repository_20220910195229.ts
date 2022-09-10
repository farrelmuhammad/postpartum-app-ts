/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";
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
}