console.log(typeof Object) // função
console.log(typeof new Object) // objeto

const Cliente = function () { }
console.log(typeof Cliente) // função
console.log(typeof new Cliente) // objeto

class Produto { } // 'Atalho de função', forma diferente de escrever uma função
console.log(typeof Produto) // função
console.log(typeof new Produto()) // objeto