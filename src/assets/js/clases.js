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
        return numberOne / numberTwo;
    }
}

const operations = new MathOperations();

console.log(operations.addition(2, 3));
console.log(operationsTwo.addition(3, 4));
console.log(operationsThree.addition(6, 9));