/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

function filtrarPorQuantidadeDeDigitos(vetor, digitos) {
    let converteEmString = elemento => elemento.toString()
    let minimaQuantidadeDeDigitos = elemento => elemento.length == digitos
    let filtro = vetor.map(converteEmString).filter(minimaQuantidadeDeDigitos)
    return filtro
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))