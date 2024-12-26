---
# Notas de JS

Aprendiendo los fundamentos de la web para luego enfocarme en el mundo de la 
inteligencia artificia. Mis apuntes son de la escuala de JavaScript de Platzi
---

# Clase #1
## Anatomía de una variable

Las variables son como cajas que podemos guardar información, podemos colocarles
un nombre y luego podemos cambiar su valor. Existen variables y constantes. La 
diferencia es que con las variables podemos cambiar su valor a lo largo del código
y las constantes no, las constantes siempre tendrán el mismo valor en toda la 
ejecución del código.

Para poder declarar una variable en Js, sigue los siguientes pasos:

1. Usa la palabra reservada `let`. 
2. Seguido de ello coloca el nombre.
3. Coloca el signo `=` para la asignación del valor. 
4. Por último le colocas el valor que necesites.

Para poder declara constantes en Js, sigue los pasos anteriores pero solo 
cambia la palabra reservada de `let` por `const`.

**NOTA**

1. `var` sirve también para declarar funciones, la diferencia es el scope. 
2. En Js puedes declarar variables sin ningún valor inicial, estas variables
toman el valor de `undefined`.
3. Si declaras varias variables en una sola linea, tienes que usar `;` para
separarlas. 

## Comentarios

Para hacer comentarios en el código puedes hacer de los maneras:

1. `//` usa esto para comentarios de una sola línea. 
2. `/* */` usa esto para hacer comentarios de un bloque, en el medio va el texto.

**NOTA GENERAL**

En Js aunque no es obligatorio es de muy buena practica colocar al final `;`
siempre en cada linea de código. 

---

# Clase #2 
## Tipos de Datos En JavaScript

En Js hay 10 tipos de datos, los primitivos y complejos.

## Primitivos:

1. String: es texto, se declara con comillas dobles o simples.
2. Number: números. 
3. Boolean: se declaran con `true` y `false`.
4. Null: es un vacío, que no existe nada, se declara con `null`.
5. Undefined: No definido, lo da js, se declara con `undefined`.
6. Symbol: nos da un valor único, un ID único, se declara con `Symbol('value')`.
7. BigInt: para números grandes, se declaran con el número y `n` al final. 

## Complejos

1. Funciones: se declaran con `function`.
2. Objetos: Son diccionarios de Python, clave y valor, se declaran igual que Py.
3. Listas: Lista, se declaran con `[]`.

---
# Clase #3