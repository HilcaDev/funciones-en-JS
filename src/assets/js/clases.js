
class OperacionesMatematicas {
    constructor(numero1,numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    sumaNumerosEnteros(){
        return this.numero1+this.numero2;
    }
    restaNumerosEnteros(){
        resultado= this.numero1-this.numero2;
        return resultado;
        console.log(`La resta de los numeros es igual a ${resultado}`)
    }
    multiplicacionNumerosEnteros(){
        resultado= this.numero1*this.numero2;
        return resultado;
        console.log(`La multiplicacion de los numeros es igual a ${resultado}`)
    }
    divisionNumerosEnteros(){
        resultado= this.numero1/this.numero2;
        return resultado;
        console.log(`La division de los numeros es igual a ${resultado}`)
    }
}

console.log(sumaNumerosEnteros(2,3));