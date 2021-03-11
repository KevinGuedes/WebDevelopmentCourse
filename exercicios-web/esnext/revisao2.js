// Arrow Function
// Sâo Funções Anônimas
const soma = (a = 0, b = 10) => a + b
console.log(soma())
console.log(soma(3, 1))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) //imutável o this da arrow function
lexico1()
lexico2()


function lexico3() {
    console.log(this === global)
}
const lexico4 = lexico3.bind({}) //mutável
lexico3()
lexico4()

//operador rest
//Transforma em vetor
function variosArgumentos(...numeros) {
    const total = numeros.reduce((acumulador, atual) => acumulador + atual)
    console.log(total)
}
function variosArgumentos2() {
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]
    }
    console.log(soma)
}

variosArgumentos(1, 2, 3)
variosArgumentos2(1, 2, 3)
