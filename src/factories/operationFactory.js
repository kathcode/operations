const Sum = require('./sum');
const Subtraction = require('./subtraction');
const Multiplication = require('./multiplication');
const Division = require('./division');

const operationType = { Sum, Subtraction, Multiplication, Division };

module.exports = {
  createOperation: (type, attributes) => {
    const Operation = operationType[type];
    return new Operation(type, attributes).getResult();
  },
};
