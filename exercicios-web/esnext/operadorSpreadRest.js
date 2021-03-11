// Rest para juntar -> exemplo no revisao2.js (função com vários parâmetros)
// Spread para espalhar

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

const vetor1 = [1, 2, 3]
const vetor2 = ['a', 'b', 'c', ...vetor1, 4, 5, 6, 7]
console.log(vetor2)
