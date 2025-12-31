// "let" define uma variável que pode ser inicializada na criação 
// ou posteriormente apenas com a atribuição de um valor.

let idade; // variável declarada sem valor inicial
idade = 25; // atribuição feita depois

let nome = "Leyvino"; // variável já inicializada na criação




//let a;
//let b;
//a = 10;
//b = 6;

let a = 10;
let b = 6;
let r = a + b;

console.log("O resultado é: " + r);

// Diferença entre var e let:
//
// 1. Escopo:
//    - var → escopo de função ou global. Ignora blocos { }.
//    - let → escopo de bloco. Só existe dentro das chaves onde foi declarado.
//
// 2. Hoisting:
//    - var → sofre hoisting: pode ser usada antes da declaração, mas o valor será undefined.
//    - let → também sofre hoisting, mas fica na "Temporal Dead Zone". Usar antes da declaração gera erro.
//
// 3. Redeclaração:
//    - var → permite redeclarar a mesma variável no mesmo escopo.
//    - let → não permite redeclarar no mesmo escopo, evitando confusão.
//
// 4. Boas práticas:
//    - Hoje em dia, let é preferido porque evita bugs e torna o código mais previsível.
//    - Use const quando o valor não vai mudar, e let quando precisar reatribuir.
