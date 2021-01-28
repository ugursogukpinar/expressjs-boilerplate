const logger = require('../utils/logger');

module.exports = (action) => {
  return (req, res, next) => {
    logger.debug(`Action fired: ${action.name}`);
    const start = new Date();
    Promise.resolve(action(req, res, next))
      .then((data) => {
        const duration = new Date() - start;

        logger.debug(`Action response sent: ${action.name} `, {
          duration: `${duration}ms`
        });

        return res.ok(data);
      })
      .catch((err) => {
        if (err.type !== 'APP_ERROR') {
          logger.error(`Error occured on action ${action.name}: `, err);
        } else {
          logger.debug(`AppError on action ${action.name}: ${err.message}`);
        }
        return next(err);
      });
  };
};
