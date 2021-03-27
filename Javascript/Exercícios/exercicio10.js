/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function simboloMais(repeticoes) {
    caracteres = ''
    for (let i = 0; i < repeticoes; i++) {
        caracteres = caracteres.concat('+')
    }
    return caracteres
}

console.log(simboloMais(5))