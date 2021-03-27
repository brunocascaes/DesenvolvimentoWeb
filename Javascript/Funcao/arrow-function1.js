let dobro = function (a) {
    return 2*a;
}

dobro = (a) => {
    return 2*a;
}

dobro = a => 2*a;
//não é necessário utilizar parenteses quando há apenas um parâmetro
//return é implícito

console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
}

ola = () => {
    return 'Olá';
}

ola = () => 'Olá';
//função sem parâmetros
ola = _ => 'Olá'
//parâmetros ignorados

console.log(ola());