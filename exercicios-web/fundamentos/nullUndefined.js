let valor //não inicializada
//console.log(valor) //undefined porque não tem nada atribuído
//console.log(valor2) //not defined, não declarada

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined //evitar este tipo de atribuição
console.log(!!produto.preco)
delete produto.preco
console.log(produto)
console.log(undefined + 1)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)

console.log(produto.preco + 1)