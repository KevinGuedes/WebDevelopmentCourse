const express = require('express')
const app = express()
//Uma vez submetido os dados via formulário, será feito um parser no corpo da requisição e jogar os dados no request.body
const bodyParser = require('body-parser')
const port = 3333

app.use(bodyParser.urlencoded({ extended: true }))
//Sem este bodyParser, retornaria undefined

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})
