import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { MoodleWsService } from "src/moodlews/moodle_ws.service";
import { AdmLocalCoursesController } from "./adm_cursos_local.controller";
import { AdmLocalCoursesService } from "./adm_cursos_local.service";

@Module({
    controllers:[AdmLocalCoursesController],
    providers:[AdmLocalCoursesService, MoodleWsService],
    imports:[HttpModule]
})
export class AdmLocalCoursesModule{}