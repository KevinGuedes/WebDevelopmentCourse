function multiplicaVetor(dados, multiplicador) {
    return multiplicador > 5 ? dados.map(d => d * multiplicador) : dados
}

console.log(multiplicaVetor([1, 2, 3, 4, 5], 6))
