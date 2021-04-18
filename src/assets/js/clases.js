
class MathOperations {

    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    addition() {
        return this.numberOne + this.numberTwo;
    }

    subtraction() {
        result = this.numberOne - this.numberTwo;
        return result;
        console.log(`La resta de los numeros es igual a ${result}`)
    }

    multiply() {
        result = this.numberOne * this.numberTwo;
        return result;
        console.log(`La multiplicacion de los numeros es igual a ${result}`)
    }

    division() {
        result = this.numberOne / this.numberTwo;
        return result;
        console.log(`La division de los numeros es igual a ${result}`)
    }
}

const obj1 = new MathOperations(2,6);
console.log(obj1.addition());