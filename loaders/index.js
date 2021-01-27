// const config = require('../config');
const logger = require('../utils/logger');


// Bootstrap
module.exports = async () => {
  logger.debug('Loaders are working');
  return true;
};
