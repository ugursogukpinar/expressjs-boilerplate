const Joi = require('@hapi/joi');

module.exports = {
  helloWorld: Joi.object().keys({
    name: Joi.string().required(),
  })
};
