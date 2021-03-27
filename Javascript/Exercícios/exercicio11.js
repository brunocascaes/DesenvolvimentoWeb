/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/

function receberPrimeiroEUltimoElemento(vetor) {
    novoVetor = []
    novoVetor[0] = vetor[0] //vetor.shift()
    novoVetor[1] = vetor.pop()
    return novoVetor
}

console.log(receberPrimeiroEUltimoElemento([10, 20, 30, 40, 50]))