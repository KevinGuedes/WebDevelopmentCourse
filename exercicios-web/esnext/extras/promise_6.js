function gerarErro(chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < (chanceErro / 100)) {
            reject(new Error('Erro na Promise'))
        }
        else
            resolve('Sucesso na Promise')
    })
}

// Caso 1
// gerarErro(100)
//     .then(console.log) //Exceção por falta de tratamento de erro

// Caso 2
// gerarErro(100)
//     .then(console.log)
//     .catch(err => console.log(err.message)) //Sem exceção pois há tratamento do erro

// Caso 3
// gerarErro(100)
//     .then(
//         console.log,
//         err => console.log(err.message)
//     )//Sem exceção pois há tratamento do erro

// Caso 4
// try {
//     gerarErro(100)
//         .then(console.log)
// }
// catch (err) {
//     console.log(err.message)
// } //Exeção


// Caso 5
function gerarErro2(chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            consol.log('vai dar ruim')
            if (Math.random() < (chanceErro / 100)) {
                reject(new Error('Erro na Promise'))
            }
            else
                resolve('Sucesso na Promise')
        }
        catch (err) {
            reject('Erro do catch na promise')
        }
    })
}


// gerarErro2(100)
//     .then(console.log) //Exeção

// gerarErro2(100)
//     .then(console.log)
//     .catch(console.log) //Sem execeção

// gerarErro2(100)
//     .then(
//         console.log,
//         err => console.log(err)
//     )//Sem exceção pois há tratamento do erro

// try {
//     gerarErro2(100)
//         .then(console.log)
// }
// catch (err) {
//     console.log(err)
// } //Exeção


//Conclusão
/*
* A minha promise precisa ter um .catch ou uma segunda função no then para tratamento de erro
*/
