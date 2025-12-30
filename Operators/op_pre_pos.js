let n = 10;
let a = 5 + n++;

console.log("a -> " + a);
console.log("n -> " + n);

let x = 5;

console.log(++x); 
// Prefixado (++x): primeiro incrementa (x passa de 5 para 6),
// depois retorna o valor atualizado → resultado: 6

console.log(x++); 
// Posfixado (x++): primeiro retorna o valor atual (6),
// depois incrementa (x passa para 7) → resultado: 6

console.log(--x); 
// Prefixado (--x): primeiro decrementa (x passa de 7 para 6),
// depois retorna o valor atualizado → resultado: 6

console.log(x--); 
// Posfixado (x--): primeiro retorna o valor atual (6),
// depois decrementa (x passa para 5) → resultado: 6