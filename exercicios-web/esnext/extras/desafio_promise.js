//TODO Desafio: Encapsular a leitura de um arquivo em formato de Promise
const fs = require('fs') //módulo core
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

function lerArquivoPromise(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf8', (error, data) => {
            if (!error)
                resolve(data)
            else
                reject(error)
        })
    })
}

lerArquivoPromise(caminho)
    .then(console.log)
    .catch(error => {
        console.log(error.message)
    })
