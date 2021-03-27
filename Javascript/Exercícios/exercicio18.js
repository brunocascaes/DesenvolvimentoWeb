/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

function criarProdutoEServico(nome, categoria, preco) {
    return {
        nome,
        categoria,
        preco
    }
}

function despesasTotais(vetor) {
    const preco = (elemento) => elemento.preco
    const soma = (acumulador, elemento) => acumulador + elemento
    const resultado = vetor.map(preco).reduce(soma)
    return resultado
}

vetor = []
vetor.push(criarProdutoEServico('Jornal online', 'Informação', 89.99))
vetor.push(criarProdutoEServico('Cinema', 'Entretenimento', 150))

console.log(despesasTotais(vetor))