const soma = function (x, y) { // função anônima
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {// função anônima
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)// função anônima

const pessoa = {
    falar: function () {// função anônima
        console.log('Opa')
    }
}

const pessoa2 = {
    falar () { // função anônima
        console.log('Opa')
    }
}

pessoa.falar()

function sayHello() { //função não anônima
    console.log('Hello')
}