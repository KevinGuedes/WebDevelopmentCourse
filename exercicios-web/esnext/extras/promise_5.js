function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('ola')
            if (Math.random() < chanceErro)
                reject('Ocorreu um erro')
            else
                resolve(valor)
        }
        catch (err) {
            reject(err)
        }
    })
}

funcionarOuNao(3, 0.1)
    .then(console.log)
//Estoura exceção quando tem promise sem tratamento de erro

funcionarOuNao(4, 0.7)
    .then(console.log)
    .then(
        valor => console.log(valor),
        erro => console.log('Primeiro tratamento ' + erro)
    ) //tratamento de erro aqui elimina o funcionamento do catch
    //Além disso, também não há mais dados para os próximos then
    .catch(console.log)
    .then(() => console.log('Fim. Não há mais dados aqui')) //como se fosse um finally
//* O mais comum é com o .catch no final
