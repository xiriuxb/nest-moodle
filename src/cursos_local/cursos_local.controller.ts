import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LocalCoursesService } from "./cursos_local.service";

@ApiTags('local_courses')
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