const express = require('express');
const isValid = require('../../middleware/isValid');
const errorHandler = require('../../handlers/errorHandler');
const middlewareHandler = require('../../handlers/middlewareHandler');

const controller = require('./controller');
const validator = require('./validator');


const router = express.Router();

router.get('/hello-world', middlewareHandler(isValid(validator.helloWorld)), errorHandler(controller.helloWorld));

module.exports = router;
