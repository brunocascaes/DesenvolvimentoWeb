const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar um array apenas com os preços
let resultado = carrinho.map(function(elemento) {
    const fromJSON = JSON.parse(elemento) //converte em objeto
    return fromJSON.preco
})

console.log(resultado)