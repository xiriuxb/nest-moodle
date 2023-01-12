import { Module } from "@nestjs/common";
import { MdlCourseController } from "./mdl_course.controller";
import { MdlCourseService } from "./mdl_course.service";

@Module({
    controllers:[MdlCourseController],
    providers:[MdlCourseService]
})
export class MdlCourseModule{}