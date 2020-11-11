const Operation = require('./operation');

class Multiplication extends Operation {
  getResult() {
    return this.firstNumber * this.secondNumber;
  }
}

module.exports = Multiplication;
