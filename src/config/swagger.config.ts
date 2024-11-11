import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest-Vite api')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();