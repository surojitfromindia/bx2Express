const Joi = require("joi");

const UserValidation = async (data) => {
  //validation schema
  const joiuserSchema = Joi.object({
    name: Joi.string().required().min(3).max(25),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  //return validation result
  return await joiuserSchema.validateAsync(data);
};

const LoginValidation = async (data) => {
  const joiloginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return await joiloginSchema.validateAsync(data);
};

const billValidation = async (data) => {
  const joiBillSchema = Joi.object({
    bill_date: Joi.date().required(),
    customer_name: Joi.date().required(),
    customer_contact: Joi.date().required(),
    item_name: Joi.date().required(),
    item_type: Joi.date().required(),
    item_rate: Joi.date().required(),
    item_valuation: {
      require_quantity: Joi.date().required(),
      require_quantity_unit: Joi.date().required(),
      making_charge: Joi.date().required(),
      gst: Joi.date().required(),
    },
    item_deposite_valuation: {
      deposite_quantity: Joi.date().required(),
      deposite_quantity_unit: Joi.date().required(),
    },
    total_valuation: {
      total_without_gst: Joi.date().required(),
      grand_total: Joi.date().required(),
    },
  });
};

//export func
module.exports = { UserValidation, LoginValidation };
