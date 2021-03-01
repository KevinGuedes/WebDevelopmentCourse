function MeuObjeto() {
    this.sobrenome = 'Silva'
}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Objetos criados a partir de uma mesma função possuem o mesmo 'pai'
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
console.log(Object.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia, meu nome é ${this.nome} ${this.sobrenome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


//*Em resumo:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(MeuObjeto.prototype.__proto__ === Object.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)//existe mas não aponta para nada
