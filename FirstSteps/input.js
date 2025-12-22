
// A linha abaixo importa o módulo "prompt-sync", que permite ler entradas do usuário via terminal.
// A função prompt() pode ser usada para solicitar dados e armazenar em variáveis.
const prompt = require("prompt-sync")();

// Exemplo de uso:
let nome = prompt("Digite seu nome: "); // o usuário digita e o valor é atribuído à variável
console.log("Olá, " + nome); // imprime a resposta recebida
