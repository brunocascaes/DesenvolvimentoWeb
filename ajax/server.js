const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/* dentro da pasta atual do qual o arquivo server.js está,
sirva os arquivos estáticos (html, js fonts, dados, css) */
app.use(express.static('.'))

/* bodyParser aplicado para qualquer requisição */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload') //pasta de destino
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    } //nome do arquivo (data_atual _ nome_original)
})

const upload = multer({ storage }).single('arquivo')
//recebe um arquivo que virá na requisição como "arquivo"

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query (ex: /parOuImpar?numero=1 via get)
    //req.params (ex: /parOuImpar/1)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

/* app.get('/teste', (req, res) => res.send('Ok')) */
app.listen(8080, () => console.log('Executando...'))
