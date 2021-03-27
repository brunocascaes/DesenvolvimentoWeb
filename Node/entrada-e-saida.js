const anonimo = process.argv.indexOf('-a') !== -1
//se for passado via terminal node entrada-e-saida.js -a
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome; ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}