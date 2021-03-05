const moduloA = require('../../moduloA') //saindo da pasta com ../
const moduloB = require('../../moduloB')
//const moduloB = require('../../moduloAB') //ler o erro
const saudacao = require('saudacao') //vai procurar o index.js da pasta no node_modules
//!não criar pastas no node_modules

const http = require('http') //módulos internos (core) do node
const c = require('./pastaC') // = require('./pastaC/index.js')


//const moduloB = require('C:/Users/Kevin/Desktop/WebDevelopmentCourse/exercicios-web/node/moduloB.js')
//!Utilizar caminho relativos e não absolutos

console.log(moduloA.ola)
console.log(saudacao.ola)
console.log(c.ola)

// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)
