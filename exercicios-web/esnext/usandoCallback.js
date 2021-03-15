//Sem promises
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`

    http.get(url, response => {
        let resultado = ''

        response.on('data', dados => {
            resultado += dados
        }) //stream de dados

        response.on('end', () => { //quando estiver pronto
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
//!Famoso callback hell
//!Não recomando utilizar desta maneira
//Complicado e ilegível
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `Turma A: ${aluno.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `Turma B: ${aluno.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `Turma C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})
