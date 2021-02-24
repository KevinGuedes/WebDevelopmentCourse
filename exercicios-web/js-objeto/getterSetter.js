const sequencia = {
    _valor: 1, // convenção para atributo privado, só pode ser usado internamente
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor)
            this._valor = valor
    } //!não aceita sobrecarga, apenas no get e set
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
