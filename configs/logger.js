module.exports = {
  level: process.env.LOG_LEVEL || 'debug',
  colorize: process.env.LOG_COLORIZE || process.env.NODE_ENV === 'local'
};
