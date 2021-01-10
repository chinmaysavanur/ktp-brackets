// Validation
const Joi = require('joi');

// Registeration Validation
const registerValidation = (data) => {
  const newUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
    pledgeClass: Joi.string().required(),
  });

  // Validate data before creating a user
  return newUserSchema.validate(data);
};

// Login Validation
const loginValidation = async (data) => {
  const existingUserSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  // Validate data before creating a user
  return existingUserSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
