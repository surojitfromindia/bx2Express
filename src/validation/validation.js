const Joi = require("joi");

const UserValidation = async (data) => {
  //validation schema
  const joiuserSchema = Joi.object({
    name: Joi.string().required().min(3).max(25),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });

  //return validation result
  return await joiuserSchema.validateAsync(data);
};

const LoginValidation = async (data) => {
  const joiloginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });

  return await joiloginSchema.validateAsync(data);
};

//export func
module.exports = { UserValidation, LoginValidation };
