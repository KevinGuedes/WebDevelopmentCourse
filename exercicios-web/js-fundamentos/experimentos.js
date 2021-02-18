let a = 312

global.b = 1234 // window do browser
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(a)

console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

//criando variável sem var e let
abc = 'não faça isso'
console.log(global.abc)
