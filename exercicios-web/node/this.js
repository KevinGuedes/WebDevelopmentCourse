console.log(this === global) //false
console.log(this === module) //false

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro da função...')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)

    //this.perigo = '...' //colocando no escopo global
}

logThis()
