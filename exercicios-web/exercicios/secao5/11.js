function isAnoBissexto(ano) {

    try {
        if (isNaN(ano))
            throw new Error('Ano inválido')
        else if (ano <= 0)
            return false
        else if (ano % 400 == 0)
            return true
        else if (ano % 100 == 0)
            return false
        else if (ano % 4 == 0)
            return true
        else
            return false
    }
    catch (e) {
        console.log(e.message)
    }

}

console.log(isAnoBissexto(0))
console.log(isAnoBissexto(4))
console.log(isAnoBissexto(100))
console.log(isAnoBissexto(400))
console.log(isAnoBissexto(800))
console.log(isAnoBissexto(2020))
console.log(isAnoBissexto(2021))
console.log(isAnoBissexto('jsnf'))
