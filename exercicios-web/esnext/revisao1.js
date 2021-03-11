// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) //dá erro

// Template String
const nome = 'Kevin'
console.log(`Olá, ${nome}!
Tudo bem?`)

// Destructuring
const [l, e, ...tras] = 'Kevin Santos Guedes'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome: j } = { nome: 'Ana', idade: '29' }
console.log(i, j)
