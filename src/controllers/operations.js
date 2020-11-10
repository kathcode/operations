const { validationResult } = require('express-validator');
const { validatorError, serverError } = require('../utils/errors');
const operationFactory = require('../factories/operationFactory');

exports.sum = (req, res, next) => {
  buildOperationProcess(req, res, 'Sum');
};

exports.subtraction = (req, res, next) => {
  buildOperationProcess(req, res, 'Subtraction');
};

exports.multiplication = (req, res, next) => {
  buildOperationProcess(req, res, 'Multiplication');
};

exports.division = (req, res, next) => {
  buildOperationProcess(req, res, 'Division');
};

const buildOperationProcess = (req, res, operationType) => {
  validateParams(req);

  try {
    const operationResult = getOperationResult(req, operationType);
    sendResponse(res, operationResult);
  } catch (e) {
    serverError(e);
  }
};

const validateParams = (req) => {
  const errorList = validationResult(req);

  if (!errorList.isEmpty()) {
    validatorError();
  }
};

const getOperationResult = (req, operationType) => {
  const firstNumber = +req.body.firstNumber;
  const secondNumber = +req.body.secondNumber;
  const operationResult = operationFactory.createOperation(operationType, {
    firstNumber,
    secondNumber,
  });

  return operationResult;
};

const sendResponse = (res, operationResult) =>
  res.status(201).json({ data: operationResult, message: 'Operation success' });
