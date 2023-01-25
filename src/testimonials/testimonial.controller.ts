import { Controller, Get} from "@nestjs/common";
import { TestimonialService } from "./testimonial.service";

@Controller('testimonials')
export class TestimonialController{
    constructor(
        private testimonialService:TestimonialService
    ){}

    @Get('visibles')
    getVisibles(){
        return this.testimonialService.getPublicTestimonials();
    }
}