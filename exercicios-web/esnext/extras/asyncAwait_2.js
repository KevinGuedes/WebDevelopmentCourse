//!algoritmo apenas para entender e não para bom desempenho
function gerarNumerosEntre(min = 0, max = 100, numerosProibidos) {
    if (min > max)
        [min, max] = [max, min] //destructuring

    return new Promise((resolve, reject) => {
        const numeroAleatorio = parseInt(Math.random() * (max - min + 1) + min)

        if (numerosProibidos.includes(numeroAleatorio))
            reject('Número repetido')
        else
            resolve(numeroAleatorio)
    })
}

async function gerarMegaSena(quantidadeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(quantidadeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    }
    catch (err) {
        if (tentativas > 10)
            throw 'Não deu certo'
        else
            gerarMegaSena(quantidadeNumeros, tentativas++)
    }
}

gerarMegaSena(3) //utilizar then para tratar função assíncrona
    .then(console.log)
    .catch(console.log) //O erro lançado na função gerarMegaSena
