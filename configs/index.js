module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || '3000',
  serviceName: process.env.SERVICE_NAME,
  timezone: process.env.TIMEZONE || 'UTC',
  logger: require('./logger')
};
