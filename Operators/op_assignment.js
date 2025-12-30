// Regras de precedência dos operadores lógicos em JavaScript:
//
// 1. O operador lógico **NOT** (!) tem a maior precedência.
//    Ele é avaliado primeiro, invertendo o valor booleano.
//    Exemplo: !true → false
//
// 2. O operador lógico **AND** (&&) vem em seguida.
//    Ele só retorna true se ambos os lados forem verdadeiros.
//    Exemplo: true && false → false
//
// 3. O operador lógico **OR** (||) tem a menor precedência.
//    Ele retorna true se pelo menos um dos lados for verdadeiro.
//    Exemplo: true || false → true
//
// Ordem de avaliação:  !  →  &&  →  ||
//
// Isso significa que em uma expressão como:
//    true || false && !false
// Primeiro é avaliado !false → true
// Depois false && true → false
// Por último true || false → true

let a = 2;
console.log(a);

let b = c = d = 10;
console.log(b  + " " + c + " " + d);

let e = a + 1;
e += 5; // e = e + 5
console.log(e);

a -= 1; // a = a - 1
b *= 3; // b = b * 3
c /= 2; // c = c / 2

a++; // a = a + 1
b--; // b = b - 1

++a; // a = a + 1
--b; // b = b - 1

