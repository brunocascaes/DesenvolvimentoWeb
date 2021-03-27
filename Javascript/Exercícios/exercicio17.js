/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/

function somarNumeros(vetor) {
    const soma = (acumulador, elemento) => acumulador + elemento
    const resultado = vetor.reduce(soma)
    return resultado
}

const vetor = [10, 20, 30, 40, 50]
console.log(somarNumeros(vetor))