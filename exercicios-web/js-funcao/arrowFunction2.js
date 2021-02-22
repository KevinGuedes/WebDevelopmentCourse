function Pessoa() {
    this.idade = 0

    setInterval(() => {
        // mesmo exemplo, mas com arrow
        // o this vai ser fixo e do contexto em que foi criado
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
