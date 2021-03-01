// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'D' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)
console.log(filho.attr0)

Object.prototype.attr0 = '0' //!não faça isso
console.log(filho.attr0)

//Sombreamento, pega o atributo se tem no próprio objeto, e não nos pais
console.log(filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (!delta || Number.isNaN(delta)) {

            throw new Error('Delta inválido')

        } else {

            if (this.velAtual + delta <= this.velMax)
                this.velAtual += delta
            else
                this.velAtual = this.velMax

        }
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
    status() { //shadowning do status() da classe super/pai
        return `${this.modelo}: ${super.status()}` //super, referencia ao pai
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

try {
    ferrari.acelerar(330)
    console.log(ferrari) //mostra somente os do objeto (local), mas os do pai são acessíveis

    volvo.acelerar(100)
    console.log(volvo.status())

} catch (error) {
    console.log(error.message)
}
