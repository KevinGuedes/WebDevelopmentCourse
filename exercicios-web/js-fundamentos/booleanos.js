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


//Se todos true, executa todos os passos e retorna o último true
//Se um false, executa até o false e retorna o false
const x = () => {
    console.log('função 1 executada')
    return 1
}

const y = () => {
    console.log('função 2 executada')
    return 2
}

console.log(x() && y() && 0)
console.log(x() && 0 && y())
console.log(0 && y() && x())

console.log('\n')
console.log(0 && 3 && x())
console.log(3 && 0 && x())
console.log(3 && 3 && x())

//Pode ser usado como um if 
//Só executa quando condicao1 e condicao2 foram atendidas
//útil quando tem várias condições para entrar no if
condicao1 && condicao2 && executarAlgo()
