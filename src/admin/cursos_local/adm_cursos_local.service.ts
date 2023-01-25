import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { DatabaseService } from "src/database/database.service";
import { MoodleWsService } from "src/moodlews/moodle_ws.service";
import { CursoLocalFromMdlDto } from "./adm_cursos_local.dto";

@Injectable()
export class AdmLocalCoursesService{
    constructor(
        private readonly mdlWsService:MoodleWsService,
        private readonly dbService:DatabaseService,
    ){}

    async importFromMoodle(courseMdlId:number){
        try{
            
            const course : CursoLocalFromMdlDto = plainToClass(
                CursoLocalFromMdlDto,
                (await this.mdlWsService.findByIds([courseMdlId])).courses[0]
            );
            const courseIfExist = await this.dbService.course.findUnique({where:{moodle_id:courseMdlId}});
            if(courseIfExist){
                await this.updateCourse(courseIfExist.id, course);
            } else{
                await this.createCourse(courseMdlId,course);
            }
            return {message:'OK'};
        } catch(error){
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    private async updateCourse(courseId:number, dto:CursoLocalFromMdlDto){
        try {
            return await this.dbService.course.update({
                where:{id:courseId},
                data:{
                    category:dto.categoryname,
                    fullname:dto.fullname,
                    shortname:dto.shortname,
                }
            });
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    private async createCourse(mdlId:number,dto:CursoLocalFromMdlDto){
        try{
            return await this.dbService.course.create({
                data:{
                    category:dto.categoryname,
                    fullname:dto.fullname,
                    shortname:dto.shortname,
                    moodle_id:mdlId
                }
            });
        } catch (error){
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async setUnsetTop(id:number, value:number){
        try {
            return await this.dbService.course.update({
                where:{id:id},
                data:{
                    destacado:value,
                }
            });
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

}