const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }

const noemAtributo = 'nota'
const valorAtributo = 7.871

const obj3 = {}
obj3[noemAtributo] = valorAtributo
console.log(obj3)

const obj4 = { [noemAtributo]: valorAtributo }
console.log(obj4)

const obj5 = {
    funcao1: function () { },
    funcao2() { }
}
console.log(obj5)
