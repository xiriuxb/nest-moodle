import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { CreateTestimoniallDTO, UpdateTestimoniallDTO } from "./adm_testimonial.dto"
import { AdminTestimonialService } from "./adm_testimonial.service";
import { JwtGuardBearer } from "../../auth/guards/jwt_bearer.guard";
import { GetUser } from "../../auth/decorator/get-user.decorator";
import { RoleGuard } from "src/auth/guards/roles.guard";
import { User } from "prisma/generated/nestClient";

@Controller('admin/testimonials')
export class AdminTestimonialController{
    constructor(
        private testimonialService:AdminTestimonialService
    ){}

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