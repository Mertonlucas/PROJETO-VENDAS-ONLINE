import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();






//inicia um servidor web na porta 8080 usando o módulo principal do NestJS <<<<<<<<<