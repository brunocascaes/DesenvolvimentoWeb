/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function multiplicar(valor1, valor2) {
    let multiplicacao = 0
    for (let i = 0; i < valor2; i++) {
        multiplicacao += valor1
    }
    return multiplicacao
}

console.log(multiplicar(4, 5))