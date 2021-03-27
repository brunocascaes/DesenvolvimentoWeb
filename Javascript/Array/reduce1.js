//acumulador(anterior) e valor atual

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

//acc, atual, indice, array
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) //0 é o valor inicial (opcional)
//7.3+9.2 = 16.5
//16.5+9.8 = 26.3
//26.3+8.7 = 35

console.log(resultado)