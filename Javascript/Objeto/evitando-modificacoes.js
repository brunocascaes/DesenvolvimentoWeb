const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto))
//pode excluir
//não pode adicionar
delete produto.tag

console.log(produto)

const pessoa = {nome: 'Ju', idade: 35}
Object.seal(pessoa)
//nao pode excluir/adicionar 
//pode alterar valores
console.log('Selado: ', Object.isSealed(pessoa))

//freeze: selado + valores constantes
