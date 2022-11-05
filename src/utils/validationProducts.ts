import * as Joi from 'types-joi';

const schemaProducts = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default schemaProducts;
