import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { SetUnsetDto } from "./adm_cursos_local.dto";
import { AdmLocalCoursesService } from "./adm_cursos_local.service";

@Controller('admin/local_courses')
export class AdmLocalCoursesController{
    constructor(
        private service: AdmLocalCoursesService
    ){}

    @Post('import/:id')
    importFromMoodle(@Param('id', ParseIntPipe) id:number){
        return this.service.importFromMoodle(id);
    }

    @Post('set/:id')
    setUnset(
        @Param('id', ParseIntPipe) id:number,
        @Body() dto:SetUnsetDto
    ){
        return this.service.setUnsetTop(id, dto.destacado);
    }

}