const saudacao = 'Opa' // contexto léxico 1 -> Em que local (contexto) a variável foi declarada

function saudar() {
    const saudacao = 'Falaaaaa' // contexto léxico 2
    return saudacao // se não achar dentro do contexto 2, vai buscar no contexto 1
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123 // pode ter uma variável saudacao. Sem conflitos pois o contexto é diferente
    }
}

console.log(saudacao)
console.log(saudar())
console.log(cliente)