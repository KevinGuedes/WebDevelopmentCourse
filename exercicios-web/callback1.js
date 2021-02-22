const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // foreach passa o elemento e o índice
fabricantes.forEach(fabricante => console.log(fabricante))

fabricantes.forEach((fabricante, i) => console.log(fabricante, i))