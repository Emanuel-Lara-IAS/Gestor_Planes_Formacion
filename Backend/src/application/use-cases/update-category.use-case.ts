import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "../../domain/repositories/category.repository.js";

@Injectable()
export class UpdateCategoryUseCase {
    constructor(
        private readonly categoryRepositorie: CategoryRepository
    ){}

    execute(
        id: string,
        data: {name?: string}
    ){
        return this.categoryRepositorie.update(id, data)
    }
}