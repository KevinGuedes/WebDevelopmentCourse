const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() { return this.a + this.b + this.c }
}

console.log(JSON.stringify(obj)) //função não é passada

//console.log(JSON.parse("{ a:1, b:2, c:3 }")) //dá erro
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }")) //dá erro
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //formato aceito
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) //formato aceito


console.log(obj.soma())
