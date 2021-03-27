const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Internacional')

console.log(times)

console.log(times.size)
console.log(times.has('Vasco'))
times.delete('São Paulo')