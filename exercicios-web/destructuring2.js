const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const notas = [[, 8, 6], [9, 5, 3]]
const [, [, nota]] = notas // não recomendado na ptrática
console.log(nota)
console.log(notas[1][1]) // melhor
