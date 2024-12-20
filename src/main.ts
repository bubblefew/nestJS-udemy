import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // for security reasons, this will remove any additional properties that are not defined in the DTO
      forbidNonWhitelisted: true, // for security reasons, this will throw an error if there are any additional properties that are not defined in the DTO
      transform: true, // for security reasons, this will transform the incoming data to the correct type
    }),
  );
  await app.listen(3000);
}
bootstrap();
