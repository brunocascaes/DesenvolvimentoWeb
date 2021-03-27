console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//criando para retornar string inversa
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

//criando para pegar o primeiro elemento do array
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())