/**
 * Flow control
 *
 * While
 * For
 *
 * Conditionals
 *
 * if (if else) (if else if)
 *
 * Scopes
 *
 * var, let, const
 *
 */

// comentario de linea

// # Print special numbers

var initNumber = 40;

// for

//for(/* init */; /* condicion */; /* steps */) {
// codigo a repetir
//}

// var varlorInicial = prompt("Ingrese un valor inicial: ");

// > < =<
// x % n == 0

// resultado de condiciones es un booleano

// i++ => i = i + 1

// var s = 'ABCD';
// var i = 0;

// // console.log(s[i++]);
// // console.log(i);

// console.log(s[++i]);
// console.log(i);

//console.log(k); // 6

//  2, 4, 8

// 0

// var k = k + 2; ---> k += 2;

// for (var i = 1, j = 0; j < 3; j++) {
//   // aqui se ejecuta, mientras condicion es verdadera
//   console.log(i);
//   i = i * 2;
// }

// console.log('FIN DE FOR');

// var i = 1,
//   j = 4;
// while (j < 3) {
//   console.log(i);
//   i = i * 2;
//   j++;
// }

// console.log('FIN DE WHILE');

// CONDICIONALES
// var i = 1,
//   j = 4;
// if (i < 4) {
//   // se ejecuta cuando es verdadero
//   console.log('Se cumplio la condicion!');
// } else {
//   // de lo contrario
//   // se ejecuta cuando es falso
//   console.log('No se cumplio la condicion!');
// }

//console.log('FIN DE IF');

// var k = 400,
//   c = 2,
//   d = 5;

// if (k < 100) {
//   console.log('K es menor a 100');
// } else if (k < 200) {
//   // de lo contrario si
//   console.log('K es menor a 200');
// } else if (k < 300) {
//   console.log('K es menor a 300');
// } else {
//   console.log('K no es menor a 100 y no es menor a 200');
// }

// console.log('FIN DE IF');

// false
// FIN DE IF

// Diga si un numero es multiplo dentro de 2
// o diga si un numero es multiplo dentro de 4

var n = 71;
// //       TRUE   OR     FALSE  ==> TRUE
// if (n % 2 == 0 || n % 4 == 0) {
//   console.log('Multiplo de 2 o 4');
// }

if (n % 2 == 0 || n % 3 == 0) {
  if (n % 2 == 0) console.log('Multiplo de 2');
  if (n % 3 == 0) console.log('Multiplo de 3');
} else {
  console.log('No es ni multiplo de 2 ni de 3');
}
