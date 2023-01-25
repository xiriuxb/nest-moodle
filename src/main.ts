import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
