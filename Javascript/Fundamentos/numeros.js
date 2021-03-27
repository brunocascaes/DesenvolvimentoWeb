const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.6;
const avaliacao2 = 7.8;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //fixa quantidade de casas após a vírgula
console.log(media.toString()); //converte em string
console.log(media.toString(2)); //converte em binário
console.log(typeof media); //tipo da constante/variável
console.log(typeof Number);

console.log(7/0) //divisão por zero retorna "Infinity"
console.log(0.1 + 0.2) //não é totalmente preciso para ponto flutuante
console.log((10.3454).toFixed(2));