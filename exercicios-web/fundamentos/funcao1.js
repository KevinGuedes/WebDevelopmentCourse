// funcao sem retorno
const imprimirSoma = (a, b) => {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //somou com undefined
imprimirSoma(1, 2, 3, 4)
imprimirSoma()


// funcao com retorno
const soma = (a, b = 1) => {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) //somou com undefined