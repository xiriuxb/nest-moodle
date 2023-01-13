import { Controller, Get, Logger, ParseIntPipe, Query, ValidationPipe } from "@nestjs/common";
import { GetAllMdlCoursesDTO } from "./mdl_course.dto";
import { MdlCourseService } from "./mdl_course.service";

@Controller('mdl_courses')
export class MdlCourseController {
    constructor(
        private mdlCourseService: MdlCourseService
    ) { }

    @Get('all')
    xD(
        @Query(new ValidationPipe({
            transform:true,
            transformOptions: {enableImplicitConversion: true},
			forbidNonWhitelisted: true
        })) dto: GetAllMdlCoursesDTO,
    ) {
        Logger.log(dto);
        return this.mdlCourseService.getCourses(dto.page, dto.take);
    }

    @Get('categories')
    allCategories() {
        return this.mdlCourseService.getCategories();
    }
}