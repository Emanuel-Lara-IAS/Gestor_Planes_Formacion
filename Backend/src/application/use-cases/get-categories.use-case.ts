import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "../../domain/repositories/category.repository.js";

@Injectable()
export class GetCategoriesUseCase{
    constructor (
        private readonly categoryRepository: CategoryRepository,
    ){}

    execute(){
        return this.categoryRepository.findAll()
    }
}