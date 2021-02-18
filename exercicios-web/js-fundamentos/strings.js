const nome = 'Kevin1234'

console.log(nome.charAt(2))
console.log(nome.charAt(10)) //retorna nulo
console.log(nome.charCodeAt(2)) //unicode
console.log(nome.indexOf('n'))

console.log(nome.substring(1)) //1 em diante
console.log(nome.substring(0, 3)) //0 até 3 exclusivo

console.log('Nome: '.concat(nome).concat('.'))
console.log('Nome' + 'João')
console.log(nome.replace('e', 'F'))

//Expressões regulares
console.log(nome.replace(/\d/g, 'U')) //todos os dígitos pela letra U
console.log(nome.replace(/\w/g, 'U')) //todo pela letra U
//sem a flag 'g'lobal, substitui somente o primeiro caso 

console.log('Kevin,Karisia,Diana,Ivan,Kiara'.split(','))