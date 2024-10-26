import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // for security reasons, this will remove any additional properties that are not defined in the DTO
      forbidNonWhitelisted: true, // for security reasons, this will throw an error if there are any additional properties that are not defined in the DTO
      transform: true, // for security reasons, this will transform the incoming data to the correct type
    }),
  );
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Intro')
    .setDescription('The NestJS Intro API description')
    .setTermsOfService('https://www.google.com/policies/terms/')
    .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
    .addServer('http://localhost:3000', 'Development server')
    .setVersion('1.0')
    // .addTag('nestjs-intro')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
