import { Module } from "@nestjs/common";
import { AdminTestimonialController } from "./adm_testimonial.controller";
import { AdminTestimonialService } from "./adm_testimonial.service";

@Module({
    controllers:[AdminTestimonialController],
    providers:[AdminTestimonialService]

})
export class AdminTestimonialModule{}