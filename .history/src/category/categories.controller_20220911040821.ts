/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CategoriesService } from "./categories.service";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { GetCategoriesFilterDto } from "./dto/get-categories-filter.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller('category')
@UseGuards(AuthGuard())
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }

    @Get()
    getCategories(
        @Query() filterDto: GetCategoriesFilterDto,
    ): Promise<Category[]> {
        return this.categoriesService.getCategories(filterDto);
    }

    @Get('/:id')
    getSymptomById(
        @Param('id') id: string,
    ): Promise<Category> {
        return this.categoriesService.getCategoryById(id);
    }

    @Post()
    createCategory(
        @Body() createCategoryDto: CreateCategoryDto,
    ): Promise<Category> {
        return this.categoriesService.createCategory(createCategoryDto);
    }

    @Delete('/:id')
    deleteCategory(
        @Param('id') id: string,
    ): Promise<void> {
        return this.categoriesService.deleteCategory(id);
    }

    @Patch('/:id')
    updateCategory(
        @Param('id') id: string,
        @Body() updateCategoryDto: UpdateCategoryDto,
    ): Promise<Category> {
        const { category_name } = updateCategoryDto;

        return this.categoriesService.updateCategory(id, category_name);
    }
}