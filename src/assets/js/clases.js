// SRP: Single Responsibility Principle
class MathOperations {

    addition(numberOne, numberTwo) {
        return numberOne + numberTwo;
    }

    subtraction(numberOne, numberTwo) {
        return numberOne - numberTwo
    }

    multiply(numberOne, numberTwo) {
        return numberOne * numberTwo
    }

    division(numberOne, numberTwo) {
        if (numberTwo === 0)
            return 0;
        else
            return numberOne / numberTwo;
    }
}

const operations = new MathOperations();

console.log('MathOperations');
console.log(operations.addition(2, 3));
console.log(operations.addition(3, 4));
console.log(operations.division(6, 0));

class Calculadora {
    operations;

    constructor(operations) {
        this.operations = operations;
    }

    total(subtotal, total) {
        return this.operations.addition(subtotal, total);
    }
}

console.log('Calculadora');
const calculator = new Calculadora(new MathOperations);

console.log(calculator.total(5, 6));