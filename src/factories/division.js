const Operation = require('./operation');

class Division extends Operation {
  getResult() {
    return this.firstNumber / this.secondNumber;
  }
}

module.exports = Division;
