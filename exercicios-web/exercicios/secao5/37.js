function calcularPG(quantidadeTermos, primeiroTermo, razao) {

    for (let i = 0; i < quantidadeTermos; i++)
        console.log(`Termo ${i + 1})`, primeiroTermo * (razao ** i))

    console.log('Soma: ' + (primeiroTermo * ((razao ** quantidadeTermos) - 1)) / (razao - 1))
}

calcularPG(10, 5, 3)


function calcularPA(quantidadeTermos, primeiroTermo, razao) {

    for (let i = 0; i < quantidadeTermos; i++)
        console.log(`Termo ${i + 1})`, primeiroTermo + razao * i)

    console.log('Soma: ' + (quantidadeTermos * (primeiroTermo + (primeiroTermo + ((quantidadeTermos - 1) * razao)))) / 2)
}

calcularPA(10, 10, 15)
