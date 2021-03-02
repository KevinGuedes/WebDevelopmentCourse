const obj1 = new Object({
    nome: 'John'
});
console.log(obj1.__proto__ === Object.prototype)

const obj2 = {
    nome: 'Kevin'
}
console.log(obj2.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)

function Jogo(name) {
    return {
        name,
    }
}

const jogo = Jogo('Horizon Zero Dawn')
console.log(jogo.__proto__ === Object.prototype)

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const pessoa = new Pessoa('Kevin', 25)
console.log(typeof Pessoa)
console.log(Pessoa.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(pessoa.__proto__ === Pessoa.prototype)
console.log(Pessoa.prototype.__proto__ === Object.prototype)


class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoa2 = new Pessoa2('Kevin', 25)
console.log(typeof Pessoa2)
console.log(Pessoa2.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(pessoa2.__proto__ === Pessoa2.prototype)
console.log(Pessoa2.prototype.__proto__ === Object.prototype)
