import { Module } from "@nestjs/common";
import { EnrolmentController } from "./enrolment.controller";

@Module({
    controllers:[EnrolmentController],
    providers:[],
})
export class EnrolmentModule{

}