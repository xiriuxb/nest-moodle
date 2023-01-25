import { Controller, Get, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { LocalCoursesService } from "./cursos_local.service";

@Controller('local_courses')
export class LocalCoursesController{
    constructor(
        private service:LocalCoursesService
    ){}

    @Get('destacados')
    getDestacados(){
        return this.service.getDestacados();
    }
}