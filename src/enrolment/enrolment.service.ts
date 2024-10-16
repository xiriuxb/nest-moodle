import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "prisma/generated/nestClient";
import { CursoLocalDTO } from "src/cursos_local/cursos_local.dto";
import { LocalCoursesService } from "src/cursos_local/cursos_local.service";
import { DatabaseService } from "src/database/database.service";
import { MoodleWsService } from "src/moodlews/moodle_ws.service";

@Injectable()
export class EnrolmentService{

    constructor(
        private dbService:DatabaseService,
        private crseService:LocalCoursesService
    ){}
    async newEnrolment(courseMdlId:number, user:User){
        const course = await this.crseService.upsertCourse(courseMdlId);
        
        try {
            const enrolment = await this.dbService.enrolment.create({
                data:{
                    curso_moodle_id: course.moodle_id,
                    description:'',
                    course_id: course.id,
                    username: user.username,
                    user_id:user.id,
                    enrolment_status_id:1
                }
            });
        } catch (error) {
            throw new HttpException(error,HttpStatus.BAD_REQUEST);
        }

    }
}