const ApplicationError = require('../errors/ApplicationError');

module.exports = (schema) => {
  if (!(schema.validate instanceof Function)) {
    throw new Error('Internal Server Error (Invalid request validator)');
  }

  const isValidHandler = async (request) => {
    const inputs = {
      ...request.body,
      ...request.params,
      ...request.query
    };
    const { error, value } = schema.validate(inputs);

    if (error) {
      throw new ApplicationError('Validation Error', {
        type: 'ValidationError',
        message: error.message
      });
    }

    request.inputs = value;
    return true;
  };

  return isValidHandler;
};
