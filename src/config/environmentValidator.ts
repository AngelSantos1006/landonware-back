import * as Joi from '@hapi/joi';

export class EnvironmentValidator {
  validate() {
    return Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .required(),
        LONDONWARE_HOST_DB: Joi.string().required(),
        HOST: Joi.string().required(),
        PORT: Joi.number().required(),
    });
  }
}
