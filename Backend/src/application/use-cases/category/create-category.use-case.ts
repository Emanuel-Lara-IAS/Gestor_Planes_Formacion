import { Injectable } from "@nestjs/common";
import { Category } from "../../../domain/entities/category.entity.js";
import { CategoryRepository } from "../../../domain/repositories/category.repository.js";

@Injectable()
export class CreateCategoryUseCase {
    constructor(
        private readonly categoryRepository: CategoryRepository
    ){}

    execute(name: string){
        const category = new Category(
            crypto.randomUUID(),
            name
        )
        return this.categoryRepository.create(category)
    }
}