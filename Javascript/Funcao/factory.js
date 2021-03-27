//Para não ter que criar vários objetos
//obj = { ... } obj2 = { ... } 

//factory simples: função que retorna um novo objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199));
console.log(criarProduto('iPad', 1199));