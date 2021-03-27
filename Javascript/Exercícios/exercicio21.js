/*Criar uma função que receba um array de números e retorne o menor número desse array.*/

function menorNumero(vetor) {
    return vetor.sort((a, b) => a - b).shift()
}

console.log(menorNumero([10, 5, 60, 30]))