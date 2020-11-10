const express = require('express');
const router = express.Router();

// Controllers
const operationsController = require('../controllers/operations');

// Utils
const parameterNumberValidator = require('../utils/parameter.validator');

// Validation params
const validations = [
  parameterNumberValidator('firstNumber'),
  parameterNumberValidator('secondNumber'),
];

router.post('/sum', validations, operationsController.sum);
router.post('/subt', validations, operationsController.subtraction);
router.post('/mult', validations, operationsController.multiplication);
router.post('/div', validations, operationsController.division);

module.exports = router;
