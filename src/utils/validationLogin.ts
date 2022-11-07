// import * as Joi from 'types-joi';
import Joi from 'joi';

const schemaLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default schemaLogin;
