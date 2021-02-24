// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'D' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)
console.log(filho.attr0)

Object.prototype.attr0 = '0'
console.log(filho.attr0)

//Sombreamento, pega o atributo se tem no próprio objeto, e não nos pais
console.log(filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },
    status() {
        return `${this.velAtual} km/h (Máxima - ${this.velMax})`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super, referencia ao pai
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //do objeto, ams os do pai são acessíveis
console.log(volvo)
