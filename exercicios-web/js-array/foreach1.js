const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((valor, indice) => console.log(`${indice}: ${valor}`))

aprovados.forEach(nome => console.log(nome))

const exibirAprovado = (aprovado) => console.log(aprovado)
aprovados.forEach(exibirAprovado)

//!curioso
const outrosAprovado = ['Kevin', 'Kiara']
aprovados.forEach((valor, indice, outrosAprovado) => {
    console.log(`${indice}: ${valor}`)
    console.log(outrosAprovado[indice])
})

outrosAprovado.forEach((valor, indice) => {
    console.log(`${indice}: ${valor}`)
})
