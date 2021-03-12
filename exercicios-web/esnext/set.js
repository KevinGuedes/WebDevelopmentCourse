//Não indexada e sem repetição
const times = new Set()
times.add('Vasco').add('Palmeiras').add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('Palmeiras')

const nomesSet = new Set(['Ana', 'Ana', 'Lucas'])
console.log(nomesSet)
