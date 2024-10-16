import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import corsConfig from './config/cors.config';
import { SwaggerModule } from '@nestjs/swagger';
import swaggerConfig from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsConfig);
  
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform:true,
    validationError:{
      target:false,
      value:false,
    },
    exceptionFactory: (errors) => new BadRequestException(errors),

  }));
  await app.listen(3000);
}
bootstrap();
