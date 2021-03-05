//Todos são o mesmo endereço de memória, são objetos
console.log(module.exports === this)
console.log(module.exports === exports)


//Exportação
//Todos apontam para o mesmo endereço
this.a = 1
exports.b = 2
module.exports.c = 3


exports = null
console.log(module.exports) //o que de fato é exportado

exports = {}
console.log(module.exports) //o que de fato é exportado

module.exports = {
    publico: true
}

console.log(module.exports)
