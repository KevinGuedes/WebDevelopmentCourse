function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade) //this no contexto do setInterval não é a Pessoa
    }, 1000)
}

console.log('Pessoa)', new Pessoa)


function Pessoa1() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //amarra o this ao contexto da Pessoa1
}

console.log('Pessoa1)', new Pessoa1)


function Pessoa2() {
    this.idade = 0

    const self = this //com const deixa mais seguro

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}


console.log('Pessoa2)', new Pessoa2)
