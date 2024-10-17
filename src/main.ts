import {
  BadRequestException,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common';
import { corsConfig, swaggerConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsConfig);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalFilters(new AllExceptionsFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      validationError: {
        target: false,
        value: false,
      },
      exceptionFactory: (errors) => {
        const formattedErrors = {};
        for (const error of errors) {
          formattedErrors[error.property] = Object.values(error.constraints);
        }

        return new BadRequestException({
          response: formattedErrors,
          status: HttpStatus.BAD_REQUEST,
          message: 'Bad Request Exception',
          name: 'BadRequestException',
        });
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
