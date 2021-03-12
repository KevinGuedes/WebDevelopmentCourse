// tagged template -> Processar uma template string
function tag(partes, ...valores) {
    console.log(partes) //o que não foi interpoaldo
    console.log(valores) //o que foi interpolado
    return 'Outra string'
}

const aluno = 'Kevin'
const situacao = 'Aprovado'
console.log(tag`${aluno} está como: ${situacao}`)
