const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
//Se já foi chamado através do 'require', o módulo é 'cacheado'
//contadorA e contadorB apontam para a mesma referência

const contadorC = require('./instanciaNova')() //invoca a função para retornar um novo objeto
const contadorD = require('./instanciaNova')()


//Sendo mesma instância -> Aponta para mesma referência
contadorA.incrementar()
contadorA.incrementar()
console.log(contadorA.valor, contadorB.valor)


//Sendo instância nova -> Aponta para referências diferentes

contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor, contadorD.valor)
