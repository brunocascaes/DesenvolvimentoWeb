function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
//é possível passar dentro do resolve apenas um parâmetro

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

//then => quando é acionado o resolve
//catch => uma única vez para tratar o erro
