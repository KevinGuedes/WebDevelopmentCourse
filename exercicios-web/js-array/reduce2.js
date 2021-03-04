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

const condicaoBolsita = aluno => aluno.bolsista

//TODO Usando reduce
//?Desafio 1: Todos os alunos são bolsistas?
let resultado = alunos.map(condicaoBolsita).reduce((todosBolsistas, atual) => {
    return todosBolsistas && atual
})
console.log(resultado)

resultado = alunos.map(condicaoBolsita).every(aluno => aluno == true)
console.log(resultado)


//?Desafio 2: Algum aluno é bolsista?
resultado = alunos.map(condicaoBolsita).reduce((algumBolsita, atual) => {
    return algumBolsita || atual
})
console.log(resultado)

resultado = alunos.map(condicaoBolsita).some(aluno => aluno == true)
console.log(resultado)