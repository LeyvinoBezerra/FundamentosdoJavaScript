const d1 = new Date(2000, 3, 15);
console.log(d1); 
// Cria uma data com ano=2000, mês=3 (abril, pois os meses começam em 0), dia=15.
// Resultado: 15/04/2000

const d2 = new Date(2000, 3, 15, 16, 30, 20, 200);
console.log(d2); 
// Cria uma data completa com ano, mês, dia, hora=16, minuto=30, segundo=20, milissegundo=200.
// Resultado: 15/04/2000 16:30:20.200

console.log(d2.getMilliseconds()); 
// Retorna apenas os milissegundos da data (nesse caso, 200).

const d3 = new Date(4329874238);
console.log(d3); 
// Cria uma data a partir de um timestamp em milissegundos desde 01/01/1970 (Epoch time).
// 4329874238 ms ≈ data correspondente em 1970s.

const d4 = new Date(2000, 3, 15, 16, 30, 20, 200);
const d5 = new Date(2001, 3, 15, 16, 30, 20, 200);
// d4 e d5 são duas datas diferentes (2000 e 2001).

console.log(d2.getTime() == d4.getTime()); 
// getTime() retorna o timestamp em milissegundos da data.
// Aqui compara se d2 e d4 representam o mesmo instante no tempo.
// Como foram criadas com os mesmos valores, o resultado é true.

console.log(d4.getTime() < d5.getTime()); 
// Compara os timestamps de d4 e d5.
// Como d4 (2000) é anterior a d5 (2001), o resultado é true.