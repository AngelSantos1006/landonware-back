import { registerAs } from '@nestjs/config';

export default registerAs('microservice', () => ({
  host: process.env.HOST,
  port: process.env.PORT,
}));
