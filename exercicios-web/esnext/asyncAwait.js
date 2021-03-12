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

//Recurso ES8 -> Para simplificar o uso de Promises
//*Só funciona dentro de funções async

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
} //Retorna um objeto AsyncFunction

console.log(typeof obterAlunos)
console.log(typeof obterAlunos())

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
