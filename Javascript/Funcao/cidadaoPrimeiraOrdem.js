//forma literal
function func1() { }

//armazenar em uma variavel
const func2 = function () {}

//armazenar em um array
const array = [func1, func2];

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar());

//passar funcao como parametro
function run(fun) {
    fun();
}

run(function () {console.log('Executando...')});

//uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a+b+c);
    }
}

soma(2,3)(4);