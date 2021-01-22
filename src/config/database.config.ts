import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.LONDONWARE_HOST_DB,
}));
