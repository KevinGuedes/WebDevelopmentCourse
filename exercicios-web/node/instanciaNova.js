// Uma factory retorna uma nova instância (novo objeto)
module.exports = () => {
    return {
        valor: 1,
        incrementar() {
            this.valor++
        }
    }
}
