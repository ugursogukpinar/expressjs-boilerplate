const Joi = require('@hapi/joi');
const isValid = require('../../middlewares/isValid');

module.exports = {
  helloWorld: isValid(Joi.object().keys({
    name: Joi.string().required(),
  }))
};
