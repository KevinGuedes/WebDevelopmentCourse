function calcularCrescimento(altura1, taxa1, altura2, taxa2) {

    if (altura1 == altura2) {

        if (taxa1 > taxa2)
            return 'A criança 1 ultrapassará a criança 2 em 1 ano'
        else if (taxa1 < taxa2)
            return 'A criança 2 ultrapassará a criança 1 em 1 ano'
        else
            return 'As crianças tem igual altura e crescimento'

    } else {

        if (altura1 > altura2)
            console.log('A criança 1 é maior que a 2')
        else
            console.log('A criança 2 é maior que a 1')

        ano = (altura2 - altura1) / (taxa1 - taxa2)

        if (ano === Infinity)
            return 'A criança menor nunca alcançará a maior'
        else
            return `A criança menor ultrapassará a maior em ${ano.toFixed(2)} anos(s)`

    }
}

console.log(calcularCrescimento(50, 25, 100, 13));
console.log(calcularCrescimento(50, 25, 100, 25));
console.log(calcularCrescimento(100, 2, 98, 2.4));
