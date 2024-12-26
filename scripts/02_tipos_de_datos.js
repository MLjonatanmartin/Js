// Tipos de datos en JavaScript

// Tipos de datos primitivos

// String

let nombre = "jonatan";
console.log((nombre));
console.log(typeof nombre);

// Number

let numero = 10;
console.log(numero);
console.log(typeof numero);

// Boolean

let verdadero = true;
console.log(verdadero);
console.log(typeof verdadero);

// Null

let nulo = null;
console.log(nulo);
console.log(typeof nulo);

// Undefined

let indefinido;
console.log(indefinido);
console.log(typeof indefinido);

// Symbol

let simbolo = Symbol('mi simbolo');
console.log(simbolo);
console.log(typeof simbolo);

// Tipos de datos no primitivos

// Array

let lenguajes = ['JavaScript', 'Java', 'PHP', 'Python'];
console.log(lenguajes);
console.log(typeof lenguajes);

// Object

let personajes = {
    'lux' : 'female',
    'poder' : 'magico',
    'linea' : 'mid',
    'rol' : 'mago'
};

console.log(personajes);
console.log(typeof personajes);

// Function

function sumar(a, b) {
    return a + b;
}

console.log(sumar(1, 2));
console.log(typeof sumar);