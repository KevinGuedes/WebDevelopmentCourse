const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // this é a pessoa nesse contexto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
//resolver o this, bind no contexto da pessoa
// o 'this' será o objeto passado no bind
falarDePessoa()
