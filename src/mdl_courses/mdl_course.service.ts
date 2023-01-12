import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { MoodleDatabaseService } from "src/moodledb/mdl_database.service";

@Injectable()
export class MdlCourseService{
    constructor(
        private dbService : MoodleDatabaseService
    ){}

    async getCourses(){
        try{
            const courses = await this.dbService.mdl_course.findMany({
                where:{
                    NOT:{category:0},
                    AND:{visible:1}
                },
                select:{
                    id:true,
                    fullname:true,
                    shortname:true,
                    summary:true,
                    category_name:{select:{name:true}},
                    custom_data:{
                        select:{
                            value:true,
                            field_name:{select:{name:true}},
                        },
                    },
                    contexts:{
                        where:{contextlevel:50},
                        select:{
                            files:{
                                where:{NOT:{filename:'.'}},
                                select:{filename:true}
                            }
                        }
                    }
                },
            });            
            return courses;
        } catch (error){
            throw new HttpException('No encontrado', HttpStatus.BAD_REQUEST);
        }
    }

    async getCategories(){
        try{
            const courses = await this.dbService.mdl_course_categories.findMany({
                where:{visible:1},
                select:{visible:false, id:true, name:true}
            });
            return courses;
        } catch (error){
            throw new HttpException('No encontrado', HttpStatus.BAD_REQUEST);
        }
    }


}