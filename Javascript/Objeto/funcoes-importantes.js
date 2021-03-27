const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //chaves
console.log(Object.values(pessoa)) //valores
console.log(Object.entries(pessoa)) //array do obj

//usando destructuring e foreach
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)  
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,  //estilo o freeze
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

//assign (concatenacao de objetos)
//caso haja chaves iguais, será o valor do último
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

const obj = Object.assign(dest, o1, o2)

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)