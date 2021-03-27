//operador ... rest (juntar) / spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1344.1}
const clone = { ativo: true, ...funcionario}

console.log(clone)

//usar spread com array
const grupoA = ['JOAO', 'PEDRO', 'GLORIA']
const grupoFinal = ['MARIA', ...grupoA, 'RAFAELA']
console.log(grupoFinal)

//rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))