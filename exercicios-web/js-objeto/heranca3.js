const pai = { nome: 'Pedro', corCabelo: 'preto' } //herda de Object.prototype

const filha1 = Object.create(pai) //estabelece herança
//filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { //herda de pai
    nome: { value: 'Bia', writable: false, enumerable: true }
}) //setando atributos
console.log(filha2.__proto__)
console.log(pai.__proto__ === Object.prototype)

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha1) {
    console.log(key) //varre todas as keys
}

for (let key in filha1) {
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}
