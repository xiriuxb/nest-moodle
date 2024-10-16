import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdmLocalCoursesModule } from './admin/cursos_local/adm_cursos_local.module';
import { AdmPayMethodModule } from './admin/payment_methods/adm_pay_method.module';
import { RolesModule } from './admin/roles/role.module';
import { AuthModule } from './auth/auth.module';
import { LocalCoursesModule } from './cursos_local/cursos_local.module';
import { DatabaseModule } from './database/database.module';
import { MdlCourseModule } from './mdl_courses/mdl_course.module';
import { MoodleDatabaseModule } from './moodledb/mdl_database.module';
import { MoodleWsModule } from './moodlews/moodle_ws.module';
import { TestimonialModule } from './testimonials/testimonial.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    UserModule, 
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    AuthModule,
    MdlCourseModule,
    MoodleDatabaseModule,
    TestimonialModule,
    RolesModule,
    LocalCoursesModule,
    MoodleWsModule,
    AdmLocalCoursesModule,
    AdmPayMethodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
