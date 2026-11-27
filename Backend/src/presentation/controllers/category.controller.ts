import { Controller, Delete, Get, Patch, Post, Body, Param} from "@nestjs/common";
import { CreateCategoryDto } from "../dto/create-category.dto.js";
import { UpdateCategoryDto } from "../dto/update-category.dto.js";
import { GetCategoriesUseCase } from "../../application/use-cases/category/get-categories.use-case.js";
import { CreateCategoryUseCase } from "../../application/use-cases/category/create-category.use-case.js";
import { UpdateCategoryUseCase } from "../../application/use-cases/category/update-category.use-case.js";
import { DeleteCategoryUseCase } from "../../application/use-cases/category/delete-category.use-case.js";
import { GetByIdCategoriesUseCase } from "../../application/use-cases/category/getById-category.use-case.js";

@Controller("categories")
export class CategoryController{
    constructor(
        private readonly getCategoriesUseCase : GetCategoriesUseCase,
        private readonly getByIdCategoriesUseCase : GetByIdCategoriesUseCase,
        private readonly createCategoriesUseCase : CreateCategoryUseCase,
        private readonly updateCategoriesUseCase : UpdateCategoryUseCase,
        private readonly deleteCategoriesUseCase : DeleteCategoryUseCase,
    ){}

    @Get()
    findAll(){
        return this.getCategoriesUseCase.execute()
    }
    @Get(":id")
    findOne(@Param("id")id: string){
        return this.getByIdCategoriesUseCase.execute(id)
    }
    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto){
        return this.createCategoriesUseCase.execute(createCategoryDto.name)
    }
    @Patch(":id")
    update(
        @Param("id") id: string, 
        @Body() updateCategoryDto: UpdateCategoryDto){
        return this.updateCategoriesUseCase.execute(id, updateCategoryDto)
    }
    @Delete(":id")
    remove(@Param("id") id: string){
        return this.deleteCategoriesUseCase.execute(id)
    }
}