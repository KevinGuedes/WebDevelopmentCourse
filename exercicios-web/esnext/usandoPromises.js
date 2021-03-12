//Com promises
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`

    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let resultado = ''

            response.on('data', dados => {
                resultado += dados
            })

            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (err) {
                    reject(err)
                }
            })
        })
    })
}

//#region Primeiro Método 
//!Forma não muito interessante
let nomes = []

getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(aluno => `Turma A: ${aluno.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(aluno => `Turma B: ${aluno.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(aluno => `Turma C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})
//#endregion

//#region Segundo Método
//*Forma mais interessante
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //retorna um array de arrays (matriz)
    .then(alunos => [].concat(...alunos)) //espalha todos os array interiores dentro do concat
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
//#region

getTurma('D').catch(e => console.log(e.message))
