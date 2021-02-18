const valoresAleatorios = [7.7, 8.9, 6.3, 9.2]
console.log(valoresAleatorios[0])
console.log(valoresAleatorios[4]) //JavaScript não gera erro, mas um undefined

valoresAleatorios[4] = 10
console.log(valoresAleatorios)

console.log(valoresAleatorios.length)

valoresAleatorios[10] = 9
console.log(valoresAleatorios)

valoresAleatorios.push({id: 3}, false, null, 'teste')
console.log(valoresAleatorios)

valoresAleatorios.pop() //remove o último elemento
console.log(valoresAleatorios)

console.log(valoresAleatorios.length)
delete valoresAleatorios[0] //e substitui por um valor vazio
console.log(valoresAleatorios)
console.log(valoresAleatorios.length)

console.log(typeof valoresAleatorios)