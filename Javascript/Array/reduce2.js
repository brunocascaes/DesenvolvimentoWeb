const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

bolsistas = alunos.map(a => a.bolsista)
console.log(bolsistas)

// Desafio 1: Todos os alunos são bolsistas?
let resultado = bolsistas.reduce(function(acumulador, atual) {
    if (atual == true) {
        acumulador += 1
    }
    return acumulador
}, 0)

console.log(resultado)

if (resultado != bolsistas.length) {
    console.log('Nem todos alunos são bolsistas')
}

// Desafio 2: Algum aluno é bolsista?

if (resultado > 0) {
    console.log('Algum aluno é bolsista')
}