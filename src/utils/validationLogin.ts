import * as Joi from 'types-joi';

const schemaLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

// const schemaProducts = Joi.object({
//   name: Joi.string().min(2).required(),
//   amount: Joi.string().min(2).required(),
// });

export default schemaLogin;
