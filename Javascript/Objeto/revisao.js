//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Genérica'
produto.preco = 200

console.log(produto)

delete produto.preco
delete produto.marca

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000

console.log(carro.valor)

delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro)

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//converte json em objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)