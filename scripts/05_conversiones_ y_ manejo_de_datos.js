// declaración de un número como string

let power = '2000';
console.log(power, typeof power);

// conversión de un string a un número

let powerNumber = parseInt(power);
console.log(powerNumber, typeof powerNumber);

// conversión de un string a un número con otro método

let powerNumber2 = Number(power);
console.log(powerNumber2, typeof powerNumber2);

// declaración de un número

let power2 = 5000;
console.log(power2, typeof power2);

// conversión de un número a un string

let powerString = power2.toString();
console.log(powerString, typeof powerString);

/* Necesito consultar mucho en la documuntación el tema de la conversión de datos, 
ya que es un tema que no tengo claro. Por el momento queda pausado el tema de
la conversión de datos.
*/

// crear un ciclo que imprima los números del 1 al 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}