/**
 * EXERCÍCIO
 * ---------
 * 
 * Encontre o resultado da seguinte expressão:
 * 
 * (5 + 3) * 2 < 30 / 2 || !(5 - 1 <= 8 % 3)
 */

const e = (5 + 3) * 2 < 30 / 2 || !(5 - 1 <= 8 % 3);

// 8 * 2 < 30 / 2 || !(5 - 1 <= 2)
// 16 < 15 || !(4 <= 2)
// false || !false
// false || true
// true

console.log(e);

//====================================================================

// Sempre que usamos um operador lógico em JavaScript (como !, &&, ||),
// o resultado final da expressão será um valor lógico (boolean),
// ou seja, true ou false.
//
// Exemplos:
// true && false → false
// true || false → true
// !true → false