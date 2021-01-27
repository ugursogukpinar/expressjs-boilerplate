const AppError = require('./AppError');

class UnauthorizedError extends AppError {
  constructor() {
    super('Unauthorized');

    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
