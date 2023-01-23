import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateTestimoniallDTO, UpdateTestimoniallDTO } from "./testimonial.dto";
import { TestimonialService } from "./testimonial.service";
import { JwtGuardBearer } from "../auth/guards/jwt_bearer.guard";
import { GetUser } from "../auth/decorator/get-user.decorator";
import { User } from "@prisma/client";
import { RoleGuard } from "src/auth/guards/roles.guard";

@Controller('testimonials')
export class TestimonialController{
    constructor(
        private testimonialService:TestimonialService
    ){}

    @Get('visibles')
    getVisibles(){
        return this.testimonialService.getPublicTestimonials();
    }

    @Get('t/:id')
    @UseGuards(JwtGuardBearer)
    getOne(
        @Param('id', ParseIntPipe) testimonialId:number
    ){
        return this.testimonialService.getTestimonialById(testimonialId);
    }

    @Post('create')
    @UseGuards(JwtGuardBearer, RoleGuard(['admin']))
    createnewTestimonial(
        @Body() dto:CreateTestimoniallDTO,
        @GetUser() user:User
    ){
        return this.testimonialService.createTestimonial(dto, user.id);
    }

    @Patch('update/:testimonialId')
    @UseGuards(JwtGuardBearer)
    updateTestimonial(
        @Param('testimonialId', ParseIntPipe) testimonialId:number,
        @Body() dto:UpdateTestimoniallDTO,
        @GetUser() user:User
    ){
        return this.testimonialService.updateTestimonial(dto, testimonialId, user.id);
    }

    @Delete('delete/:testimonialId')
    @UseGuards(JwtGuardBearer)
    deleteTestimonial(
        @Param('testimonialId', ParseIntPipe) testimonialId:number,
    ){
        return this.testimonialService.deleteTestimonial(testimonialId);
    }
}