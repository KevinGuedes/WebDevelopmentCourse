const { reject } = require("lodash")

function gerarNumerosEntre(min = 0, max = 100, numerosProibidos) {
    if (min > max)
        [min, max] = [max, min] //destructuring

    return new Promise(resolve => {
        const numeroAleatorio = parseInt(Math.random() * (max - min + 1) + min)

        if (numerosProibidos.includes(numeroAleatorio))
            reject('Número repetido')
        else
            resolve(numeroAleatorio)
    })
}


gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)
