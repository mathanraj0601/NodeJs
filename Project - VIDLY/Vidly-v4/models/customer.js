const Joi = require("joi");
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    required: true,
    length: 10,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

function validateCustomer(customer) {
  const schema = Joi.object({
    name: Joi.string().max(100).min(4).required(),
    isGold: Joi.boolean().default(false),
    phone: Joi.string().length(10).required(),
  });
  return schema.validate(customer);
}


exports.Customer = Customer;
exports.validateCustomer = validateCustomer();