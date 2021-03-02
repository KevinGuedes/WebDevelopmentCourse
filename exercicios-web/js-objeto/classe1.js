class Lancamento {

    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }

}

class CicloFinanceiro {

    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(lancamento => this.Lancamentos.push(lancamento))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(lancamento => valorConsolidado += lancamento.valor)
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2021)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())
