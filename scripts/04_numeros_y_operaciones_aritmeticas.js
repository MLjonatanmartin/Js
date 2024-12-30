// declaracion de un número

let numero = 10;
console.log(numero);

// declaración de un número decimal

let decimal = 10.5;
console.log(decimal);

// declaración de un número científico

let cientifico = 1e3;
let cientifico2 = 1e-3;

console.log(cientifico);
console.log(cientifico2);

// declaración de un número infinito

let infinito = Infinity;
console.log(infinito);

// declaración de un NaN

let noEsUnNumero = NaN;
console.log(noEsUnNumero);

// operaciones aritméticas

let suma = 13 + 25;
console.log(suma);

let resta = 45 - 3;
console.log(resta);

let multiplicacion = 11 * 55;
console.log(multiplicacion);

let division = 12 / 3;
console.log(division);

let modulo = 15 % 4;
console.log(modulo);

let potencia = 30 ** 2;
console.log(potencia);

// operaciones con decimales y precisión

let numero_decimal = 0.1;
let numero_decimal2 = 0.2;
let suma_decimal = numero_decimal + numero_decimal2;
console.log(suma_decimal);
console.log(typeof suma_decimal);

// suma con precisión

let numeroSumaDecimal = suma_decimal.toFixed(1);
console.log(typeof numeroSumaDecimal);

// ejecución de la raíz cuadrada

let raiz_cuadrada = Math.sqrt(255);
console.log(raiz_cuadrada);

// ejecución de valor absoluto

let valor_absoluto = Math.abs(-565);
console.log(valor_absoluto);

// ejecución de valor ale

let valor_aleatorio = Math.random();
console.log(valor_aleatorio);