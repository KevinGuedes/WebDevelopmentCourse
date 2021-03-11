// ES 8: Object.values/Object.entries/
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
const entriesObjeto = Object.entries(obj)
console.log(entriesObjeto)

entriesObjeto.forEach(([key, value]) => console.log(`${key} : ${value}`))

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        console.log(`Oi gente! Eu sou ${this.nome}`)
    }
}
pessoa.ola()


//Class (Internamente é uma função)
class Animal { }
class Cachorro extends Animal {
    falar() {
        console.log('Au au')
    }
}

new Cachorro().falar()
