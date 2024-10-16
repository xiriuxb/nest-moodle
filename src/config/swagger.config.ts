import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest-Vite api')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

export default swaggerConfig;