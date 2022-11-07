// import * as Joi from 'types-joi';
import Joi from 'joi';

const schemaproductsIds = Joi.array().min(1).required().messages({
  'any.required': '"productsIds" is required',
  'array.base': '"productsIds" must be an array',
  'array.min': '"productsIds" must include only numbers',
});

export default schemaproductsIds;