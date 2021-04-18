// SRP: Single Responsibility Principle
class MathOperations {

    numberOne = 0;
    numberTwo = 0;

    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    addition() {
        return this.numberOne + this.numberTwo;
    }

    subtraction() {
        return this.numberOne - this.numberTwo
    }

    multiply() {
        return this.numberOne * this.numberTwo
    }

    division() {
        return this.numberOne / this.numberTwo;
    }
}

const operations = new MathOperations(2,6);
const operationsTwo = new MathOperations(15,3);
const operationsThree = new MathOperations(8,3);

console.log(operations.addition());
console.log(operationsTwo.addition());
console.log(operationsThree.addition());
console.log(operationsTwo.multiply());