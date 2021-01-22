const produto = {}
produto.nome = 'Televisão'
produto.preco = 900
produto['Desconto legal'] = 50 //evitar atributos com espaço

console.log(produto)

const pessoa = {
    nome: "Kevin",
    altura: 1.75,
    profissao: {
        cargo: "Desenvolvedor C#",
        universidade: "Unifor",
        anoFormacao: 2022
    }
}

console.log(pessoa)
jsonPessoa = JSON.stringify(pessoa)
console.log(typeof jsonPessoa)
console.log(jsonPessoa)
