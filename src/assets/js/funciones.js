
function sumar (...items) {
    let resultado = 0;

  items.forEach(function(n){
      resultado+=n;
  });

  return resultado;
}

function restar (a,b,...items) {
    let resultado = a-b;

  items.forEach(function(n){
      resultado-=n;
  });

  return resultado;
}

function multiplicar (a,b,...items) {
    let resultado = a*b;

  items.forEach(function(n){
      resultado*=n;
  });

  return resultado;
}

function dividir (a,b,...items) {
    let resultado = a/b;

  items.forEach(function(n){
      resultado/=n;
  });

  return resultado;
}

console.log(sumar(10,5));
console.log(restar(10,5,2,1));
console.log(dividir(10,5,1));
console.log(multiplicar(10,5,5));