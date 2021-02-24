const pessoa = {
    nome: 'Ana',
    idade: 22,
    peso: 65
}

//reflection
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => console.log(`${e[0]}: ${e[1]}`))

Object.entries(pessoa).forEach(([key, value]) => console.log(`${key}: ${value}`))
//*usando destructuring de um array

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //aparece no Object.keys
    writable: false, // uma espécie de freeze para a key
    value: '01/01/1997'
})

pessoa.dataNascimento = '01/01/2020'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest /*objeto de destino*/, o1, o2)
//Passa os atributos de outros objetos para o objeto de destino
console.log(obj) //prevalece o último 

Object.freeze(obj)
obj.c = 1234
console.log(obj)
