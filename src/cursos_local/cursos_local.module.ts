import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { MoodleWsService } from "src/moodlews/moodle_ws.service";
import { LocalCoursesController } from "./cursos_local.controller";
import { LocalCoursesService } from "./cursos_local.service";

@Module({
    controllers:[LocalCoursesController],
    providers:[MoodleWsService, LocalCoursesService],
    imports:[HttpModule]
})
export class LocalCoursesModule{}