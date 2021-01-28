const express = require('express');
const actionHandler = require('../../handlers/actionHandler');
const middlewareHandler = require('../../handlers/middlewareHandler');

const controller = require('./controller');
const validator = require('./validator');


const router = express.Router();

router.get('/hello-world', middlewareHandler(validator.helloWorld), actionHandler(controller.helloWorld));

module.exports = router;
