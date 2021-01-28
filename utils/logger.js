const winston = require('winston');
const config = require('../configs');

const logger = winston.createLogger({
  level: config.logger.level,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.colorize({ all: config.logger.colorize }),
  ),
  defaultMeta: {
    env: config.env,
    serviceName: config.serviceName
  },
  transports: [
    new winston.transports.Console(),
  ]
});

module.exports = logger;
