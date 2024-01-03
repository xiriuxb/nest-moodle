import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class MoodleWsService {
    constructor(
        private config: ConfigService,
        private readonly axiosService: HttpService,
    ) { }

    readonly baseQuery = `${this.config.get('MOODLE_WS_URL')}?&wsfunction=${
        MoodleWsFunctions.GET_COURSES_BY_FIELD}&wstoken=${
        this.config.get('MOODLE_WS_TOKEN')}&moodlewsrestformat=json`;

    async findCoursesBy (type:'ids', dataArr:number[])
    async findCoursesBy (type:'shortname', dataArr:string[])
    async findCoursesBy (type:'ids'|'shortname', dataArr:number[]|string[]){
        const url = `${this.baseQuery}&field=${type}&value=${dataArr.toString()}`;
        return await this.axiosFetch(url);
    }

    private async axiosFetch(url:string){
        try{
            const obs = this.axiosService.request({
                method: 'GET',
                timeout:3000,
                url,
            });
            const data = (await firstValueFrom(obs)).data;

            if(data.errorcode == 'invalidrecord' || data.courses.length === 0){
                throw new HttpException({message:'Not Found'}, HttpStatus.NOT_FOUND);
            }

            return data;
        } catch(error){
            this.handleError(error);
        }
    }

    handleError(error:any){
        let message:string = error.response.message;
        let status:number = HttpStatus.NOT_FOUND;
        if(error.constructor.name === 'AxiosError' && error.code!=AxiosError.ERR_BAD_REQUEST){
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            message = 'Server error';
        }
        throw new HttpException({message},status);
    }
}

enum MoodleWsFunctions {
    GET_COURSES_BY_FIELD = 'core_course_get_courses_by_field'
}