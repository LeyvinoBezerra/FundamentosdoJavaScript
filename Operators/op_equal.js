console.log(1 === "1"); 
// === (estritamente igual) → compara valor e tipo.
// 1 (number) não é igual a "1" (string) → false

console.log(1 === true); 
// === → compara valor e tipo.
// 1 (number) não é igual a true (boolean) → false

console.log(null === undefined); 
// === → null e undefined são tipos diferentes → false


console.log(1 == "1"); 
// == (igualdade solta) → converte os valores antes de comparar.
// "1" (string) é convertido para número → 1 == 1 → true

console.log(1 == true); 
// == → true é convertido para número 1 → 1 == 1 → true

console.log(null == undefined); 
// == → null e undefined são considerados iguais na comparação solta → true


console.log(1 !== "1"); 
// !== (estritamente diferente) → compara valor e tipo.
// 1 (number) e "1" (string) são diferentes → true

console.log(1 !== true); 
// !== → 1 (number) e true (boolean) são diferentes → true

console.log(null !== undefined); 
// !== → null e undefined são tipos diferentes → true


console.log(1 != "1"); 
// != (diferente solto) → converte antes de comparar.
// "1" vira número 1 → 1 != 1 → false

console.log(1 != true); 
// != → true vira número 1 → 1 != 1 → false

console.log(null != undefined); 
// != → null e undefined são considerados iguais na comparação solta → false