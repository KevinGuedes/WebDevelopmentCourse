const numeros = [1, 2, 3]
const nome = 'Kevin'
const jogo = {
    nome: 'FF-XV Royal Edition',
    produtora: 'Square Enix'
}

//#region For Of
console.log('\nFor In')

for (let numero of numeros) {
    console.log(numero)
}

for (let letra of nome) {
    console.log(letra)
}

for (let key in jogo) {
    console.log(jogo[key])
}
//#endregion

//#region For In
console.log('\nFor In')

for (let i in numeros) {
    console.log(numeros[i])
}

for (let i in nome) {
    console.log(nome[i])
}

// for (let key of jogo) {
//     console.log(key)
// } //não funciona com objeto
//#endregion

//#region Aula
console.log('\nAula')

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
    console.log(assunto[0], assunto[1])
}

for (let key of assuntosMap.keys()) {
    console.log(key)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

const letras = new Set(['a', 'b', 'c'])

for (let letra of letras) {
    console.log(letra)
}
//#endregion
