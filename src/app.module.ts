import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MdlCourseModule } from './mdl_courses/mdl_course.module';
import { MoodleDatabaseModule } from './moodledb/mdl_database.module';
import { TestimonialModule } from './testimonials/testimonial.module';
import { RolesModule } from './admin/roles/role.module';
import { LocalCoursesModule } from './cursos_local/cursos_local.module';
import { MoodleWsModule } from './moodlews/moodle_ws.module';
import { AdmLocalCoursesModule } from './admin/cursos_local/adm_cursos_local.module';
import { AdmPayMethodModule } from './admin/payment_methods/adm_pay_method.module';
import { PermissionModule } from './admin/permissions/permission.module';
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
    PermissionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
