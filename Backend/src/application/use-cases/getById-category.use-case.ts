import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "../../domain/repositories/category.repository.js";

@Injectable()
export class GetByIdCategoriesUseCase {
    constructor(
        private readonly categoryRepository: CategoryRepository
    ){}

    execute(id: string){
        return this.categoryRepository.findById(id)
    }
}