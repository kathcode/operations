const { body } = require('express-validator');

module.exports = (parameter) => {
  return body(parameter)
    .exists()
    .withMessage(`The value ${parameter} is required`)
    .matches(/^[0-9]+$/, 'i')
    .withMessage(`The value ${parameter} must be numeric`)
    .trim()
    .escape();
};
