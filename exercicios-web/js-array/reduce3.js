Array.prototype.reducao = function (callback, valorInicial) {

    const indiceInicial = valoringInicial ? 0 : 1

    let acumulador = valorInicial || this[0];

    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}
