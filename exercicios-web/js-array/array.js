console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('Bia', 'Ana', 'Carlos') //!não é a forma mais recomendada
console.log(aprovados[1])


aprovados = ['Bia', 'Ana', 'Carlos'] //*Notação literal -> forma recomendada
console.log(aprovados[0])
console.log(aprovados[3]) //undefined


aprovados[3] = 'Paulo' //para substituir
aprovados.push('Miguel')
console.log(aprovados.length)


aprovados[9] = 'Rafael' //os não declarados ficam como undefined
console.log(aprovados[8] === undefined)
console.log(aprovados.length)


console.log(aprovados)
aprovados.sort() //causa alteração no objeto (referência)
console.log(aprovados)


delete aprovados[1] //substitui para undefined
console.log(aprovados)


aprovados = ['Bia', 'Calors', 'Ana']
aprovados.splice(1, 1)//do índice 1 inclusivo, retira 1

aprovados = ['Bia', 'Calors', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //substituir por
console.log(aprovados)

aprovados.splice(1, 0, 'Elemento3') //adicionar
console.log(aprovados)

aprovados.splice(1, 1, 'Elemento4', 'Elemento5') //remove e adiciona
console.log(aprovados)
