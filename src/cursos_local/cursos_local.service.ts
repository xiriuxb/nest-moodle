import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { DatabaseService } from "src/database/database.service";
import { MoodleWsService } from "src/moodlews/moodle_ws.service";
import { CursoLocalDTO } from "./cursos_local.dto";

@Injectable()
export class LocalCoursesService{
    constructor(
        private readonly mdlWsService: MoodleWsService,
        private dbService:DatabaseService
    ){}

    private async getDestacadosIds():Promise<number[]>{
        const localTop = await this.dbService.course.findMany({
            where:{destacado:1}
        });
        return localTop.map(course=>course.moodle_id);
    }

    async getDestacados() {
        try{
            const topIds = await this.getDestacadosIds();
            const courses = (await this.mdlWsService.findCoursesBy("ids", topIds)).courses;
            return courses.map(
                element => {
                    element.overviewfiles = 
                    element.overviewfiles[0]? 
                    element.overviewfiles[0].fileurl.replace('webservice','') : 'xd';
                    return plainToClass(CursoLocalDTO,element)
                }
            )
        } catch (error:any){
            throw new HttpException('Cannot get data', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async upsertCourse(crseMoodleId:number){
        const mdlCourse:CursoLocalDTO = await this.mdlWsService.findCoursesBy("ids",[crseMoodleId]);
        try {
            const course = this.dbService.course.upsert({
                where:{moodle_id:crseMoodleId},
                create:{
                    category:mdlCourse.categoryname,
                    fullname:mdlCourse.fullname,
                    shortname:mdlCourse.shortname,
                    moodle_id:mdlCourse.moodle_id,
                },
                update:{
                    fullname:mdlCourse.fullname,
                    category:mdlCourse.categoryname,
                    shortname:mdlCourse.shortname,
                }
            });
            return course;
        } catch (error) {
            throw new HttpException(error,HttpStatus.BAD_REQUEST);
        }
    }
}