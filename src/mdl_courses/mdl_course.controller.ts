import { Controller, DefaultValuePipe, Get, Param, Query, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GetAllMdlCoursesDTO } from "./mdl_course.dto";
import { MdlCourseService } from "./mdl_course.service";

@ApiTags('mdl_courses')
@Controller('mdl_courses')
export class MdlCourseController {
    constructor(
        private mdlCourseService: MdlCourseService
    ) { }

    @Get(':category?')
    xD(
        @Param('category', new DefaultValuePipe(undefined)) category:string,
        @Query(new ValidationPipe({
            transform:true,
            transformOptions: {enableImplicitConversion: true},
			forbidNonWhitelisted: true
        })) dto: GetAllMdlCoursesDTO,
    ) {
        return this.mdlCourseService.getCourses(dto.page, dto.take, category);
    }

    @Get('categories')
    allCategories() {
        return this.mdlCourseService.getCategories();
    }
}