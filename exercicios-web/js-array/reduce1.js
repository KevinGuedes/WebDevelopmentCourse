const alunos = [{
    nome: 'João',
    nota: 7.3,
    bolsista: false
},
{
    nome: 'Maria',
    nota: 9.2,
    bolsista: true
},
{
    nome: 'Pedro',
    nota: 9.8,
    bolsista: false
},
{
    nome: 'Ana',
    nota: 8.7,
    bolsista: true
}
]


let resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)

resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)
console.log(resultado)

resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, [])
console.log(resultado)

const num = [5]
resultado = num.reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)
