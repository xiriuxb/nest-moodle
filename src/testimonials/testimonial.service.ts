import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateTestimoniallDTO, UpdateTestimoniallDTO } from "./testimonial.dto";

@Injectable()
export class TestimonialService{
    constructor(
        private dbService: DatabaseService
    ){}

    async getPublicTestimonials(){
        return await this.dbService.testimonial.findMany({
            where:{active:1},
            select:{autor:true, file:true, text:true}
        });
    }
}