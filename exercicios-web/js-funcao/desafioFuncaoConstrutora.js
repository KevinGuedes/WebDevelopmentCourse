
function Pessoa(nome) {

    this.nome = nome; //atributo público

    this.falar = () => console.log(`Meu nome é ${this.nome}`) //método público
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)
