const express = require('express')
const app = express()
//Uma vez submetido os dados via formulário, será feito um parser no corpo da requisição e jogar os dados no request.body
const bodyParser = require('body-parser')
const port = 3333

app.use(bodyParser.urlencoded({ extended: true }))
//Sem este bodyParser, retornaria undefined

app.get('/usuarios', (req, res) => {
    console.log(req.query)
    //não recomendado para dados sensíveis -> Utilizar POST e HTTPS para dados
    res.send('<h1>Usuário incluído via GET.</h1>')
})

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Usuário incluído.</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    res.send('<h1>Usuário alterado.</h1>')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})
