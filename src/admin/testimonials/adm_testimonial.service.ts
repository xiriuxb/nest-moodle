import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateTestimoniallDTO, UpdateTestimoniallDTO } from "./adm_testimonial.dto";

@Injectable()
export class AdminTestimonialService{
    constructor(
        private dbService: DatabaseService
    ){}

    async createTestimonial(dto:CreateTestimoniallDTO, userId:number){
        try {
            return await this.dbService.testimonial.create({
                data:{
                    autor:dto.author,
                    text:dto.text,
                    updated_by:userId
                }
            });
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
        
    }

    async updateTestimonial(dto:UpdateTestimoniallDTO, testimonialId:number, userId:number){
        try {
            return await this.dbService.testimonial.update({
                where:{id:testimonialId},
                data:{
                    autor:dto.author,
                    text:dto.text,
                    active:dto.active,
                    updated_by:userId,
                }
            });
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async deleteTestimonial(testimonialId:number){
        try{
            return await this.dbService.testimonial.delete({
                where:{id:testimonialId}
            });
        } catch (error){
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async getTestimonialById(testimonialId:number){
        try {
            return await this.dbService.testimonial.findUniqueOrThrow({
                where:{id:testimonialId}
            });
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

}