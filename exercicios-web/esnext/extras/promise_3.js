function gerarNumerosEntre(min = 0, max = 100) {
    if (min > max)
        [min, max] = [max, min] //destructuring

    return new Promise(resolve => {
        const numeroAleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(numeroAleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(numeroAleatorio => numeroAleatorio * 10)
    .then(novoNumero => `O número gerado foi ${novoNumero}`)
    .then(console.log)
//Chamadas consecutivas
