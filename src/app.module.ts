import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { EnvironmentValidator } from './config/environmentValidator';
import microserviceConfig from './config/microservice.config';
import databaseConfig from './config/database.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    expandVariables: true,
    validationSchema: new EnvironmentValidator().validate(),
    validationOptions: {
      allowUnknown: true,
      abortEarly: true,
    },
    load: [microserviceConfig, databaseConfig],
  }),
  MongooseModule.forRootAsync({
    useFactory: async (configService: ConfigService) => ({
      uri: process.env.LONDONWARE_HOST_DB,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    inject: [ConfigService],
  }),
  ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
