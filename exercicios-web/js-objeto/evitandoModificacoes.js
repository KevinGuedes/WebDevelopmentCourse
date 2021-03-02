// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoçãoo'
}) //deletar e mudar, não adicionar

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

const pessoa = { nome: 'Ana' }
Object.seal(pessoa) //mudar, não adicionar nem retirar
console.log(Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
pessoa.nome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

const pessoa2 = { nome: 'Kevin' }
Object.freeze(pessoa2) //não mudar, nem adicionar, nem remover
delete pessoa2.nome
pessoa2.idade = 29
pessoa2.nome = 'João'
console.log(pessoa2)
