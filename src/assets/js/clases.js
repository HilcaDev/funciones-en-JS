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
console.log(operations.addition(5, 3));
console.log(operations.subtraction(3, 4));
console.log(operations.multiply(3, 4));
console.log(operations.division(6, 0));

class Calculator {
    operations;
    configuration = {};

    constructor(operations, configuration = {}) {
        this.operations = operations;
        this.configuration = configuration;
    }

    total(subtotal, total) {
        if (this.configuration.isAddition)
            throw "No tienes habilitada la configuracion para Calcular el Total";
        else
            return this.operations.addition(subtotal, total);
    }

    calculateIVA(total, percentage) {
        let result = this.operations.multiply(total, percentage);
        return result;
    }

    cancelShop(total) {
        return this.operations.multiply(total, 0);
    }
}

console.log('Calculator');
//Inyeccion de Depencia
//const calculator = new Calculator(new MathOperations);
const calculator = new Calculator(operations);

console.log(calculator.total(5, 6));
console.log(calculator.calculateIVA(10, 0.19));
console.log(calculator.cancelShop(calculator.total(5, 6)));

console.log("Caja Registradora");   

//Definir una caja registradora, que me permita mostrar el total calculado, mostrar el iva calculado, y mostrar si una compra fue cancelada
class CashResgister {
    
    calculator;
    

    constructor (calculator) {
        this.calculator = calculator;
    }

    totalCalculado(totalOne,totalTwo) {
        return this.calculator.total(totalOne,totalTwo);
         
    }

    totalIVA(total, percentage) {
        return this.calculator.calculateIVA(total, percentage);
       
    }

    totalCancelShop(total) {
        return this.calculator.cancelShop(total);
    }

}

const cashResgister = new CashResgister(calculator);
console.log(cashResgister.totalIVA(400,0.1));
console.log(cashResgister.totalCalculado(400,400));
console.log(cashResgister.totalCancelShop(cashResgister.totalCalculado(200,500)));