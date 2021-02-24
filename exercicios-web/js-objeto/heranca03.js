const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)//acessando o objeto pai, 
//*há uma cadeia de protótipos
console.log(ferrari.__proto__ === Object.prototype) //true
