function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

// esperarPor()
//     .then(() => console.log('Executando promise 1'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3'))


// function executarSincrono() {
//     console.log('Executar')

//     esperarPor()
//     console.log('Executando promise 1')

//     esperarPor()
//     console.log('Executando promise 2')

//     esperarPor()
//     console.log('Executando promise 3')
// }
// //primeiro os console log, depois as esperas

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 3000)
    })
}

async function executar() {
    let valor = await retornarValor()
    console.log('Executar')

    await esperarPor() //só vai para a próxima linha quando executar a função
    console.log('Executando promise 1')

    await esperarPor()
    console.log('Executando promise 2')

    await esperarPor()
    console.log('Executando promise 3')

    return valor
}

// let x = executar()
// console.log(x) //não funciona

executar().then(console.log) //tem que ser utilizado assim as funções async

async function executarDeVerdade() {
    return await executar()
}

executarDeVerdade()
