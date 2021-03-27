const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(produto) {
    return produto.preco > 15
}))
//return false -> exclui do array
//return true -> mantem no array

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))