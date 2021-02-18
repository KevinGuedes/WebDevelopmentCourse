const tratarErro = (erro) => {
    throw new Error('....')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw {
    //     nome: erro.name,
    //     msg: erro.message,
    //     date: new Date
    // }
}

const gritar = (obj) => {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (erro) {
        tratarErro(erro)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
gritar(obj)
