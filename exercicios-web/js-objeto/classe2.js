class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
const pai = new Pai('Pai', 'Engenheiro')
const avo = new Avo('Legolas')

console.log(filho.__proto__)
console.log(pai.__proto__)
console.log(avo.__proto__)
console.log(typeof Avo)
console.log(avo.__proto__ === Avo.prototype)
console.log(!!Avo.prototype)
console.log(Avo.__proto__ === Function.prototype)
console.log(Avo.prototype.__proto__ === Object.prototype)
console.log(avo.__proto__.__proto__ === Object.prototype)
