import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', 'docs'));
  await app.listen(3000);
  Logger.log(`Server is running, Please visit http://localhost:${PORT}`);
}

bootstrap();
