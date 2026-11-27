import { Category } from "../entities/category.entity.js";

export abstract class CategoryRepository {
    abstract findAll(): Promise<Category[]>

    abstract findById(
        id: string
    ): Promise<Category | null>

    abstract create(
        category: Category
    ): Promise<Category>

    abstract update(
        id: string,
        category: Partial<Category>
    ): Promise<Category | null>

    abstract delete(
        id: string
    ): Promise<void>
}