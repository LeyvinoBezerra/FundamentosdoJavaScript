// Regras de nome de variável em JavaScript puro:
// - Deve começar com letra, underline (_) ou cifrão ($).
// - Não pode começar com número.
// - Pode conter letras, números, underline (_) e cifrão ($) após o primeiro caractere.
// - Não pode usar palavras reservadas da linguagem (ex: let, const, if, for).
// - JavaScript é case-sensitive: "nome" e "Nome" são variáveis diferentes.
// - É boa prática usar nomes descritivos e seguir convenções como camelCase.



let idade = 25;      // válido
let _contador = 0;   // válido
let $valor = 100;    // válido
// let 1teste = 10;  // inválido, não pode começar com número



const abc = 1;
const _abc = 1;
const $abc = 1;
const a9bc = 1;
const ab$c = 1;
const abc_ = 1;
