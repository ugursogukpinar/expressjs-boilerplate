// const config = require('../config');
const logger = require('../utils/logger');
const routes = require('./routes');

// Bootstrap
module.exports = async (app) => {
  logger.debug('Loaders are working');
  await routes(app);

  return true;
};
