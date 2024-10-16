import { Module } from "@nestjs/common";
import { MoodleWsModule } from "src/moodlews/moodle_ws.module";
import { EnrolmentController } from "./enrolment.controller";

@Module({
    controllers:[EnrolmentController],
    providers:[],
    imports:[MoodleWsModule]
})
export class EnrolmentModule{

}