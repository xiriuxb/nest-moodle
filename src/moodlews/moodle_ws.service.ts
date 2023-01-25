import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom, Observable } from "rxjs";

@Injectable()
export class MoodleWsService {
    constructor(
        private config: ConfigService,
        private readonly axiosService: HttpService,
    ) { }

    async findByIds(ids:number[]=[]) {
        const obs = this.axiosService.request({
            method: 'GET',
            timeout:3000,
            url: `${this.config.get('MOODLE_WS_URL')}?wstoken=${this.config.get('MOODLE_WS_TOKEN')}&wsfunction=${MoodleWsFunctions.GET_COURSES_BY_FIELD}&field=ids&value=${ids.toString()}&moodlewsrestformat=json`,
        });

        const data = (await firstValueFrom(obs)).data;

        if(data.errorcode == 'invalidrecord'){
            throw new HttpException('No encontrado', HttpStatus.NOT_FOUND);
        }

        return data;
    }

}

export enum MoodleWsFunctions {
    GET_COURSES_BY_FIELD = 'core_course_get_courses_by_field'
}