class Operation {
  constructor(type, { firstNumber, secondNumber }) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.type = type;
  }

  getSum = () => {
    return this.firstNumber + this.secondNumber;
  };

  getSubtraction = () => {
    return this.firstNumber - this.secondNumber;
  };

  getMultiplication = () => {
    return this.firstNumber * this.secondNumber;
  };

  getDivision = () => {
    return this.firstNumber / this.secondNumber;
  };

  getResult() {
    const operations = {
      Sum: 'getSum',
      Subtraction: 'getSubtraction',
      Multiplication: 'getMultiplication',
      Division: 'getDivision',
    };

    return this[operations[this.type]]();
  }
}

module.exports = Operation;
