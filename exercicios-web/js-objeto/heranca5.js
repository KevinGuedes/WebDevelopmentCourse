console.log(typeof String)
console.log(typeof Object)
console.log(typeof Array)
//toda função tem um prototype

String.prototype.reverse = () => this.split('').reverse().join('')
console.log('Kevin'.reverse())

Array.prototype.first = () => this[0]
console.log([1, 2, 3, 4, 5].first())

//!Cuidado ao substituir funções já existentes!!!
