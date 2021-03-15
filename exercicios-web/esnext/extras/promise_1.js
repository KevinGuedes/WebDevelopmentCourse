console.log(typeof Promise)
let p = new Promise(function (cumprirPromessa) { //é o resolve
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']) //retorna somente um argumento
})//pode colocar os .then já aqui

// let p_ = new Promise(resolve => {
//     resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
// })
// p_.then(console.log)
function primeiroElemento(array) {
    return array[0]
}
const primeiraLetra = string => string[0]

new Promise(resolve => resolve(['Ana', 'Bia', 'Carlos', 'Daniel']))
    .then(primeiroElemento) //passa somente a função
    .then(primeiraLetra) //Quando há uma entrada e a saída é a entarda aplicada na função
    .then(primeiraLetra => primeiraLetra.toLowerCase())
    .then(console.log)
    .catch(console.log)
