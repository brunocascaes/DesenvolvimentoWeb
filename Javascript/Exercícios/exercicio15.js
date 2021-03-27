/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

function receberSomenteOsParesDeIndicesPares(vetor) {
    let resultado = vetor.filter((valor, indice) => (valor%2 == 0 && indice%2 == 0))
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))