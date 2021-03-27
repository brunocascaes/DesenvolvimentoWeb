/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.*/

function areaDoTriangulo(base, altura) {
    return ((base * altura) / 2).toFixed(2)
}

console.log(areaDoTriangulo(10, 15))