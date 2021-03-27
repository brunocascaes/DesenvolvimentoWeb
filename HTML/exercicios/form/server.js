const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluído!</h1>')
    // console: {nome: 'bruno', senha:'...'}
    // os nomes dos atributos sao referentes ao "name" declarado no html
    // os atributos sao referentes ao "value" declarado no html
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(5500)