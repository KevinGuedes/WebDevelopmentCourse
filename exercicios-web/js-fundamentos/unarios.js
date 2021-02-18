let num1 = 1
let num2 = 2

num1++ //pós fixado
console.log(num1)
--num1 //pré fixada, precedência maior
console.log(num1)

//!nada clean code
// ++ > === > --
console.log(++num1 === num2--) 
