let isAtivo = false //let porque vai mudar
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //em tipo booleano é true
console.log(!!isAtivo) //macete para converter para booleano true ou false
console.log(!isAtivo)

console.log('\n\nO que se comporta como verdadeiro')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\n\nO que se comporta como falso')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\n\nExtras')
console.log(!!('' || null || 0 || ' '))
console.log('' || null || 0 || 'epa') //retorna primeiro verdadeiro ou falso
console.log('' || null || 123 || ' ') 

let nome = ''
console.log('\n' + (nome || 'Desconhecido')) //valor padrão
