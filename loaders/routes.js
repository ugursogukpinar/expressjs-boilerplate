
module.exports = async (app) => {
  app.use('/api/index', require('../controllers/Index'));
};
