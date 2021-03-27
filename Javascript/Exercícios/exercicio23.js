/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
Considere que todas as palavras só são separadas por um espaço. */

function contarPalavras(frase) {
    const palavras = frase.split(" ").length
    return palavras
}

console.log(contarPalavras("Me divirto aprendendo a programar"))