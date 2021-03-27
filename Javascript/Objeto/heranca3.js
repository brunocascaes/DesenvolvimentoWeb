const pai = {nome: 'Pedro', corCabelo: 'preto'}

//cria o filho ja tendo como prototipo o pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.corCabelo)

//atributos via herança nao sao listados
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}