const valores = [1, 2, 3, 4, 5];

console.log(valores[0]);

valores[0] = 6;

console.log(valores.length);
console.log(valores.push(false, null, 3, 'oi', {id: 3}));
console.log(valores.pop());
delete valores[0];
console.log(valores);