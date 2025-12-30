var s1 = "abcdef";
console.log(s1); 
// String simples sem caracteres especiais → imprime "abcdef"

var s2 = "abc\n\tdef";
console.log(s2); 
// \n = quebra de linha, \t = tabulação → imprime "abc", pula linha e adiciona tab antes de "def"

var s3 = "abc\"d\"ef";
console.log(s3); 
// \" = aspas duplas dentro de uma string delimitada por aspas duplas → imprime abc"d"ef

var s4 = 'abc"d"ef';
console.log(s4); 
// Aspas simples delimitam a string, então aspas duplas podem ser usadas diretamente sem escape → imprime abc"d"ef

var s5 = 'abc\'d\'ef';
console.log(s5); 
// \' = aspas simples dentro de uma string delimitada por aspas simples → imprime abc'd'ef