/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function cumprimentar(nome) {
    return 'Olá, '.concat(nome).concat('!')
} 

console.log(cumprimentar('Bruno'))

const cumprimentar2 = nome => 'Olá, '.concat(nome).concat('!')

console.log(cumprimentar2('Bruno'))