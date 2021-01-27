const logger = require('../utils/logger');

module.exports = (action) => {
  return (req, res, next) => {
    logger.debug(`Middleware fired: ${action.name}`);
    Promise.resolve(action(req, res))
      .then(() => {
        return next();
      })
      .catch((err) => {
        if (err.type !== 'APP_ERROR') {
          logger.error(`Error occured on middleware ${action.name} `, err);
        } else {
          logger.debug(`AppError on action ${action.name}: ${err.message}`);
        }
        return next(err);
      });
  };
};
