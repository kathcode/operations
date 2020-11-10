const Operation = require('./operation');

module.exports = {
  createOperation: (type, attributes) => {
    return new Operation(type, attributes).getResult();
  },
};
