const Operation = require('./operation');

class Subtraction extends Operation {
  getResult() {
    return this.firstNumber - this.secondNumber;
  }
}

module.exports = Subtraction;
