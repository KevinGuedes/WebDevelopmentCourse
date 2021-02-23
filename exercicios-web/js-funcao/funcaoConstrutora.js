function Carro(velocidadeMaxima = 200, delta = 5){
    
    //Atributo privado
    let velocidadeAtual = 0;

    //Método público
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getValocidadeAtual = () => console.log(velocidadeAtual)
}

const uno = new Carro // new Carro() mesma coisa
uno.acelerar()
uno.getValocidadeAtual()


const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

ferrari.getValocidadeAtual()

console.log(typeof Carro)
console.log(typeof ferrari)