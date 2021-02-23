const pontuacao = '10 20 20 8 25 3 0 30 11'

function calculaRendimento(historico) {
    const pontuacao = historico.split(' ')
    console.log(pontuacao)
    let menorPontuacao = pontuacao[0]
    let maiorPontuacao = pontuacao[0]
    let recordes = 0
    let piorJogo

    for (let i = 0; i < pontuacao.length; i++) {
        if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            recordes++
        }
        else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            piorJogo = i + 1
        }
    }

    return [recordes, piorJogo]
}

//console.log(calculaRendimento(pontuacao))
console.log('8' > '20')
console.log(8 > 20)
