// A principal diferença entre const e let é que:
// const deve ser inicializada no momento da declaração e não pode ser reatribuída.
// let pode ser declarada sem valor inicial e receber atribuição depois.
// É mais comum ver erro de "não definido" com let, pois se você tentar usar
// a variável antes de atribuir um valor, o JavaScript acusará que ela está undefined.

let idade; // declarada mas sem valor → undefined
console.log(idade); // imprime undefined

const nome = "Leyvino"; // precisa ser inicializada na criação
console.log(nome); // imprime "Leyvino"

// let name = "Pedro";
const name = "Pedro";
name = "Paulo";
console.log(name);
