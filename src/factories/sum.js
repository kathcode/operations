const Operation = require('./operation');

class Sum extends Operation {
  getResult() {
    return this.firstNumber + this.secondNumber;
  }
}

module.exports = Sum;
