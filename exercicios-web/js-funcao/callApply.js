function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())//utiliza o produto com contexto

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco().call(carro)) //amarra o contexto
console.log(getPreco().apply(carro)) //amarra o contexto


console.log(getPreco().call(carro, 0.17, '$'))
console.log(getPreco().apply(global, [0.17, '$'])) //sem array dá erro
