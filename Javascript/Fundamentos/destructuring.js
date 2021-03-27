const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //operador destructuring
//extrai nome e idade do objeto pessoa

console.log(nome);
console.log(idade);

const { nome: n, idade:i} = pessoa

console.log(n);
console.log(i);

const {endereco: {logradouro, numero, cep}} = pessoa;

console.log(logradouro);
console.log(numero);