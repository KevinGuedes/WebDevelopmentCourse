const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = { nome: 'Ana' } //novo endereço não pode

Object.freeze(pessoa) // torna os dados do objeto constantes
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'André' })
//constante -> a referência e os dados
