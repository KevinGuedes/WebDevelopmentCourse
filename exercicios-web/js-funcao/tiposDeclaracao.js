console.log(soma(3, 4)) //FUnciona com function declaration

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
} // útil para debugger, mas não comum

console.log(mult(3, 4))