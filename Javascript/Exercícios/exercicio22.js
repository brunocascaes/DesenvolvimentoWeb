/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/

function funcaoDaSorte(numeroApostado) {
    numeroSorteado = Math.floor(Math.random() * 10)
    if (numeroApostado == numeroSorteado) {
        return `Parabéns! O número sorteado foi o ${numeroSorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${numeroSorteado}`
    }
}

console.log(funcaoDaSorte(7))