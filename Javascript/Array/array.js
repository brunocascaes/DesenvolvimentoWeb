let aprovados = new Array('Bia', 'Carlos')
console.log(aprovados)

aprovados = ['Bia', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados.push('Ana')
console.log(aprovados)

aprovados.sort() //altera o array original de forma crescente
console.log(aprovados)

delete aprovados[0] //indice 0 fica vazio
console.log(aprovados)

aprovados = ['Ana', 'Bia', 'Carlos']
aprovados.splice(1, 2) //indice e quantidade de elementos a partir que serao excluidos
console.log(aprovados)

aprovados = ['Ana', 'Bia', 'Carlos']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //indice e quantidade de elementos a partir que serao excluidos
console.log(aprovados)
//exclui um elemento e coloca 2 (elemento1 e 2)