const AppError = require('./ApplicationError');

class UnauthorizedError extends AppError {
  constructor() {
    super('Unauthorized');

    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
