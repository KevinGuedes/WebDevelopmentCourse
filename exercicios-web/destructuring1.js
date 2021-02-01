// novo recurso ES2015
const pessoa = {
    nome: 'Ana',
    idade: 18,
    endereco: {
        rua: 'Rua Muito Legal',
        numero: 312
    }
}
const { nome, idade } = pessoa

console.log(nome)
console.log(idade)
console.log(pessoa)

const { nome: n, idade: i } = pessoa
console.log(n)
console.log(i)

const { sobrenome, bemHumarado = true } = pessoa
console.log(sobrenome)
console.log(bemHumarado)

const pessoa2 = {
    nome: 'Ana',
    idade: 18,
    endereco: {
        rua: 'Rua Muito Legal',
        numero: 312
    },
    bemHumarado: false
}
const { sobrenome2, bemHumarado2 = true } = pessoa2
console.log(sobrenome2)
console.log(bemHumarado2)

const { endereco: { logradouro, numero, cep } } = pessoa2
console.log(logradouro)
console.log(numero)
console.log(cep)

const { conta: { agencia, numero } } = pessoa2
// o 'filho' do dado precisa existir