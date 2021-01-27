class ApplicationError extends Error {
  constructor(message, meta, statusCode = 400) {
    super(message);

    this.meta = meta;
    this.type = 'APP_ERROR';
    this.statusCode = statusCode;
  }
}
module.exports = ApplicationError;
