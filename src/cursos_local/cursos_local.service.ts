import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { DatabaseService } from "src/database/database.service";
import { MoodleWsService } from "src/moodlews/moodle_ws.service";
import { CursoLocalDTO } from "./cursos_local.dto";

@Injectable()
export class LocalCoursesService{
    constructor(
        private readonly mdlwsService: MoodleWsService,
        private dbService:DatabaseService
    ){}

    async getDestacados() {
        try{
            const localTop = await this.dbService.course.findMany({
                where:{destacado:1}
            });
            const moodleIds = localTop.map(course=>course.moodle_id);
            const courses = (await this.mdlwsService.findByIds(moodleIds)).courses;
            return courses.map(
                element => {
                    element.overviewfiles = 
                    element.overviewfiles[0]? 
                    element.overviewfiles[0].fileurl.replace('webservice','') : 'xd';
                    return plainToClass(CursoLocalDTO,element)
                }
            )
        } catch (error){
            throw new HttpException(error,HttpStatus.BAD_REQUEST);
        }
    }
}