const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativa
//*Como deve ser feito e o que. Muita responsabilidade no código
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)


//Declarativa
//*Abordagem mais interessante -> Possibilita maior reuso de código (funções especialistas), os detalhes internos são escondidos
const getNota = aluno => aluno.nota
const soma = (total, atual) => total += atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//Exemplo de declarativo: Um GET no SQL, maior preocupação com o que e não com o como
