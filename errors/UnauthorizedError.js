const ApplicationError = require('./ApplicationError');

class UnauthorizedError extends ApplicationError {
  constructor() {
    super('Unauthorized');

    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
