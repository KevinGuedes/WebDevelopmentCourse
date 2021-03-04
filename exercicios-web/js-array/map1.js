const notas = [1, 2, 3, 4, 5]

const notasCorrigidas = notas.map(nota => nota * 2)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado = notas.map(soma10).map(triplo).map(paraDinheiro)
consolelog(resultado)