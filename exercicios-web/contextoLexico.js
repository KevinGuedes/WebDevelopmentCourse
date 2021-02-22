const valor = 'Global'

function minhaFuncao() { //declarada dentro do arquivo (module.exports)
    console.log(valor) //procura no escopo maior
} //carrega consigo o contexto no qual ela foi definida

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()