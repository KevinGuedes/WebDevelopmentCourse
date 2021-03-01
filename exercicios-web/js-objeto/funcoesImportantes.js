const pessoa = {
    nome: 'Ana',
    idade: 22,
    peso: 65
}

console.log(pessoa.hasOwnProperty(nome)) //diz se a key é local ou herdada

//reflection
console.log(Object.keys(pessoa)) //pega as keys locais, não as herdadas
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

const o1 = { b: 2, a: 4 }
const o2 = { c: 3, a: 3 }
const dest = { a: 1 }

const obj = Object.assign(dest /*objeto de destino*/, o2, o1)
//Passa os atributos de outros objetos para o objeto de destino
console.log('obj', obj) //prevalece o último 

const obj2 = Object.assign(dest /*objeto de destino*/, o1, o2) //muda o objeto de destino
console.log('obj2', obj2)

Object.freeze(obj)
obj.c = 1234
console.log('obj', obj)

console.log(dest)
