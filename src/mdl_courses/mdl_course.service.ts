import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { MoodleDatabaseService } from "src/moodledb/mdl_database.service";

@Injectable()
export class MdlCourseService{
    constructor(
        private dbService : MoodleDatabaseService
    ){}

    async getCourses(page : number, pageSize:number ){
        try{
            const totalCourses = await this.dbService.mdl_course.count({where:{
                NOT:{category:0},
                AND:{visible:1}
            }});
            const totalPages = Math.ceil(totalCourses/pageSize);
            const hasPrev = page == 1 ? false : true;
            const hasNext = page == totalPages && totalPages>1 ? false : true;
            const courses = await this.dbService.mdl_course.findMany({
                skip:(page - 1)*pageSize,
                take:pageSize,
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
                    context:{
                        where:{contextlevel:50},
                        select:{
                            files:{
                                where:{NOT:{filename:'.'}},
                                select:{filename:true},
                            }
                        }
                    }
                },
            });            
            return {courses, totalCourses, totalPages, hasPrev, hasNext};
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