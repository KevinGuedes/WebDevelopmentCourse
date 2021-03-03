const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o último elemento del
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona
console.log(pilotos)

pilotos.shift() //remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona na primeira posição
console.log(pilotos)

//splice
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //[2, end] retorna novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //[1, 4)
console.log(algunsPilotos2)
