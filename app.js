const express = require('express');
const bodyParser = require('body-parser');
const ApplicationError = require('./errors/ApplicationError');

const config = require('./config.js');
const logger = require('./utils/logger');
const middlewareHandler = require('./handlers/middlewareHandler');
const requestLogger = require('./middlewares/requestLogger');
const responseHelpers = require('./middlewares/responseHelpers');

const makeApp = async () => {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(middlewareHandler(requestLogger));
  app.use(middlewareHandler(responseHelpers));

  app.use('/api/index', require('./controllers/Index'));

  app.use((req, res, next) => {
    const err = new ApplicationError('URL Not Found');
    err.statusCode = 404;
    next(err);
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = config.env !== 'production' ? err : {};

    logger.error(err.message, {
      statusCode: err.statusCode,
      stack: err.stack,
      meta: err.meta,
      type: err.type || 'ERROR'
    });

    return res.error({
      message: err.message,
      stack: config.env !== 'production' ? err.stack : null,
      type: err.type || 'ERROR',
      meta: err.meta
    }, err.statusCode);
  });

  return app;
};

module.exports.makeApp = makeApp;
