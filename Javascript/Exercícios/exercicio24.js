/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

function contarCaractere(caractereBuscado, frase) {
    frase = frase.split("")
    return frase.filter(caractere => caractere == caractereBuscado).length
}

console.log(contarCaractere("c", "Conhece-te a ti mesmo"))