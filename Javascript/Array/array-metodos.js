const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') //adicionar elemento no final
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adicionar elemento no inicio
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') //adiciona a partir do indice dois 2 elementos, sem deletar ninguem
console.log(pilotos)

pilotos.splice(3, 1) //remove a partir do indice 3 apenas 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do elemento 2 do antigo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array a partir do elemento 2 do antigo array, excluindo o valor da ultima posição (4)
console.log(algunsPilotos1)