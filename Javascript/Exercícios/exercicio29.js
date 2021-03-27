/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array*/

function segundoMaior(vetor) {
    tamanho = vetor.length
    elemento = vetor.sort((a, b) => a-b)[tamanho-2]
    return elemento
}

console.log(segundoMaior([12, 16, 1, 5]))