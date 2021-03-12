//Sem repetição de chaves
//Uma alternativa iterável (ver for of) em relação ao objeto
//Conjunto de pares chave : valor
const tecnologias = new Map()
tecnologias.set('react' /*chave*/, { framework: false } /*valor*/)
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

//A chave aceita função
//Criando com vários pares
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((chave, valor) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.get(123))

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

//Não aceita repetição de chave
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')


console.log(chavesVariadas.keys())
console.log(chavesVariadas.values())
console.log(chavesVariadas.entries())
