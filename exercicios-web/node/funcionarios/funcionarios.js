const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getMulheres = funcionarios => funcionarios.genero == 'F'
const getChineses = funcionarios => funcionarios.pais == 'China'

//TODO Desafio: Mulher Chinesa com Menor Salários
//Meu
function compararSalario(funcioarioA, funcionarioB) {
    if (funcioarioA.salario < funcionarioB.salario)
        return -1
    else if (funcioarioA.salario > funcionarioB.salario)
        return 1
    else
        return 0
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulherChinesaMenorSalario = funcionarios
        .filter(getMulheres)
        .filter(getChineses)
        .sort(compararSalario)[0]

    console.log(mulherChinesaMenorSalario)
})


//Da aula (melhor)
function menorSalario(funcionarioA, funcionarioB) {
    return funcionarioA.salario < funcionarioB.salario ? funcionarioA : funcionarioB
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulherChinesaMenorSalario = funcionarios
        .filter(getMulheres)
        .filter(getChineses)
        .reduce(menorSalario)

    console.log(mulherChinesaMenorSalario)
})
