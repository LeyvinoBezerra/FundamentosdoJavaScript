// if (<condição>) { ... }

const temp = 26;

if (temp > 25) {
    // A indentação (espaço/tabulação antes do código) é importante
    // porque deixa claro quais instruções pertencem ao bloco do if.
    // Aqui, as linhas dentro das chaves estão indentadas para mostrar
    // que só serão executadas se a condição (temp > 25) for verdadeira.
    console.log("Está calor!");  
    console.log("Temperatura é " + temp);
}

console.log("Fim"); 
// Fora do bloco, sem indentação extra, indicando que será executado sempre.
