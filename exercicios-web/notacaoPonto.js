console.log(typeof console)
console.log(typeof Math)

console.log(Math.ceil(6.1)) // . para acessar a função/método do objeto

const coisa = {}
coisa.nome = 'Bola'
// coisa['nome'] = 'Nova' - evitar, mas se quiser pode usar com espaço, não interessante
function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}
// o objeto/função Obj terá o atributo nome

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()