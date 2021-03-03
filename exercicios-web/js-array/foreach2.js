//Meu
Array.prototype.paraCada = function (callback) {
    for (let i in this) {
        callback(this[i], i, this)
    }
}


//Da aula
Array.prototype.paraCada2 = function (callback) {
    for (let i = 0; this.length; i++) {
        callback(this[i], i, this)
    }
}

const numeros = ['Kevin', 'Kiara']
numeros.paraCada2(function (valor, indice) {
    console.log(`${indice} : ${valor}`)
})
