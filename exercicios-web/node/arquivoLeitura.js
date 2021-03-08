const fs = require('fs') //módulo core
const caminho = __dirname + '/arquivo.json'
const conteudo2 = require('./arquivo.json') //precisa do .json porque não é .js

// Modo síncrono
//! Não interessante, trava o event loop
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

// Modo assíncrono
//* Mais interessante
fs.readFile(caminho, 'utf8', (error, data) => {
    const conteudo = JSON.parse(data)

    if (!error)
        //console.log(`${data.db.host}:${data.db.port}`) //não é um objeto de
        console.log(`${conteudo.db.host}:${conteudo.db.port}`)
})

//Lendo direto
console.log(conteudo2) //arquivo em formato de objeto, já gera o objeto

//Lendo uma pasta
fs.readdir(__dirname, (err, files) => {
    if (!err) {
        console.log('Conteúdos da pasta:')
        console.log(files)
    }
})
