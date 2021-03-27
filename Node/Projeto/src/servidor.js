const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./banco-de-dados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware  1...') //converter para json
    next()
})
*/

/*passa por aqui independente de qualquer coisa
app.use((req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) //converter para json
})
*/