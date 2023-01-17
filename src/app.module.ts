import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { MdlCourseModule } from './mdl_courses/mdl_course.module';
import { MoodleDatabaseModule } from './moodledb/mdl_database.module';
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
    TestimonialModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
