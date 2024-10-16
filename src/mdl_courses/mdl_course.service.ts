import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { MoodleDatabaseService } from "src/moodledb/mdl_database.service";

@Injectable()
export class MdlCourseService{
    constructor(
        private dbService : MoodleDatabaseService
    ){}

    async getCourses(page : number, pageSize:number, category?:string ){
        const cat = category ? this.isNanValidation(category) : undefined;
        try{
            const courses = await this.getCoursesFromMoodleDB1(page, pageSize, category);
            const totalCourses = await this.dbService.mdl_course.count({ where:{
                category:{equals:cat, not:0},
                AND:{visible:1}
            }});
            const totalPages = Math.ceil(totalCourses/pageSize);
            const hasPrev = page == 1 ? false : true;
            const hasNext = page == totalPages && totalPages>1 ? false : true;
            const data = courses.map(({course })=>{
                return({
                    id:course.id,
                    fullname:course.fullname,
                    shortname:course.shortname,
                    summary:course.summary,
                    category:course.category_name.name,
                    price:parseFloat(course.custom_data[0].value),
                    details:course.custom_data[1].value,
                    filename:course.context[0].files.length>0? course.context[0].files[0].filename:'',
                });
            });
            return {data, totalCourses, totalPages, hasPrev, hasNext};
        } catch (error){
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
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

    private isNanValidation(numero:string):number{
        if(isNaN(parseInt(numero))){
            throw new HttpException('El valor debe ser un entero', HttpStatus.BAD_REQUEST);
        }
        return parseInt(numero);
    }

    private async getCoursesFromMoodleDB1(page : number, pageSize:number, orderBy:string = '', category?:string){
        const cat = category ? this.isNanValidation(category) : undefined;
        try{
            const courses = await this.dbService.mdl_customfield_data.findMany({
                skip:(page - 1)*pageSize,
                take:pageSize,
                where:{fieldid:1,course:{visible:1,AND:{category:{equals:cat, not:0}}}},
                select:{
                    course:{
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
                        }
                    }
                }
            });
            
            return courses;
        } catch(error){
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    // private OrderBy(order:string = 'id', asc:boolean = true){
    //     const ascDesc = asc?'asc':'desc';
    //     switch (order) {
    //         case 'price':
    //             return {'charvalue':'asc'}
        
    //         default:
    //             return {'id':'asc'};
    //     }
    // }

}