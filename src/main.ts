import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const options = new DocumentBuilder()
    .setTitle('Products Module API')
    .setDescription('The products API description')
    .setVersion('1.0')
    .build();
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const PORT = config.get<number>('microservice.port');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(process.env.PORT, () => {
    Logger.log(
      `londonware back running, port: ${process.env.PORT}`,
      'Main',
    );
  });
}
bootstrap();
