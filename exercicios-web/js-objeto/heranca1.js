const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)//acessando o objeto pai, 
console.log(ferrari.prototype)//!somente em funções 
//*há uma cadeia de protótipos
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) // true
//* mesmo pai
console.log(Object.prototype.__proto__) //o prototype não tem um pai
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype)
console.log(MeuObjeto.prototype)
