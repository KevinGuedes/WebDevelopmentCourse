function gerarNumerosEntre(min = 0, max = 100, tempo = 1000) {
    if (min > max)
        [min, max] = [max, min] //destructuring

    return new Promise(resolve => {
        setTimeout(() => {
            const numeroAleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(numeroAleatorio)
        }, tempo)
    })
}

function gerarVariosNumeroAleatorios() { //Paralelismo
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

console.time('promise all')
gerarVariosNumeroAleatorios() //somente quando todos estiverem resolvidos
    .then(console.log)
    .then(() => {
        //console.timeLog('promise all')
        console.timeEnd('promise all')
    })
