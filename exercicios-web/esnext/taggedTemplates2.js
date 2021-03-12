function real(partes, ...valores) {
    const resultado = []

    //let i = 0
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${(valor.toFixed(2).toString().replace('.', ','))}`
        resultado.push(partes[indice], valor)
        //i++
    })

    //resultado.push(partes[i])
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de...`) //péssima funcionalidade
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`) //* melhor utilizar outras formas
