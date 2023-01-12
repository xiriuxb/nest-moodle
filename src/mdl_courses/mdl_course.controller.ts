import { Controller, Get, Logger } from "@nestjs/common";
import { MdlCourseService } from "./mdl_course.service";

@Controller('mdl_courses')
export class MdlCourseController{
    constructor(
        private mdlCourseService:MdlCourseService
    ){}

    @Get('all')
    xD(){
        return this.mdlCourseService.getCourses();
    }

    @Get('categories')
    allCategories(){
        return this.mdlCourseService.getCategories();
    }
}