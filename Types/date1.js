const date = new Date("2010-03-15 14:00:00.000 -0300");
console.log(date); 
// Cria um objeto Date com a data e hora especificada (15 de março de 2010, 14h, fuso -3 GMT)

console.log(date.toDateString()); 
// Retorna a data em formato legível (ex: "Mon Mar 15 2010")

console.log(date.toISOString()); 
// Retorna a data em formato padrão ISO 8601 (ex: "2010-03-15T17:00:00.000Z")

console.log(date.toLocaleTimeString()); 
// Retorna apenas o horário no formato local (ex: "14:00:00" dependendo da região)

console.log(date.toLocaleDateString()); 
// Retorna apenas a data no formato local (ex: "15/03/2010" no padrão brasileiro)

console.log(date.getTime()); 
// Retorna o timestamp em milissegundos desde 1º de janeiro de 1970 (Epoch time)

console.log(date.getDay()); 
// Retorna o dia da semana como número (0 = domingo, 1 = segunda, ..., 6 = sábado)

console.log(date.getMonth()); 
// Retorna o mês como número (0 = janeiro, 1 = fevereiro, ..., 11 = dezembro)

console.log(date.getFullYear()); 
// Retorna o ano completo (ex: 2010)