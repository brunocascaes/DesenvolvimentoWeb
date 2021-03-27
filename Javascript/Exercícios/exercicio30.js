/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */

function recerberMelhorEstudante(estudantes) {
    novoObjeto = {}
    vetor = Object.entries(estudantes)
    vetor.forEach((parChaveValor, indice) => {
        const soma = (acumulador, elemento) => acumulador + elemento
        const resultado = parChaveValor[1].reduce(soma) / parChaveValor[1].length
        vetor[indice] = [parChaveValor[0], resultado]
    })

    notas = estudante => estudante[1]
    alunos = estudante => estudante[0]
    const notasOrdenados = vetor.map(notas).sort((a, b) => a - b)
    const alunosOrdenados = vetor.map(alunos).sort((a, b) => a - b)
    
    return { nome: alunosOrdenados[alunosOrdenados.length - 1], media: notasOrdenados[notasOrdenados.length - 1] }
}

let objeto = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

console.log(recerberMelhorEstudante(objeto))