'use-strict';
//SOLID

// SRP : Single Responsibility Principle
// Funciones : Una funcion debe hacer una cosa, debe hacerla bien, y debe ser lo unico que haga

/**
 * Suma dos numeros enteros pasados como arguments a, b
 * @param {*} a 
 * @param {*} b 
 * @returns resultado de la suma de los 2 enteros
 */
function sumar(a, b) {
  return (a + b);
}

function restar(a, b) {
  return (a - b);
}

function multiplicar(a, b) {
  return (a * b);
}

function dividir(a, b) {

  if (b === 0)
    throw "No es posible dividir entre 0";
  else {
    resultado = (a / b);
  }

  return resultado;
}

console.log(sumar(10, 5));
console.log(restar(10, 5));

try {
  console.log(dividir(10, 2));
} catch (e) {
  console.error(e);
}

console.log(multiplicar(10, 5));