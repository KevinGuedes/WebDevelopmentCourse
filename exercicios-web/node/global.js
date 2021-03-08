console.log(global) //objeto global do Node

global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}

// global.MinhaApp = Object.freeze({
//     saudacao() {
//         return 'Estou em todos os lugares!'
//     },
//     nome: 'Sistema Legal'
// })
