function Aula(nome, id) {
    this.nome = nome;
    this.id = id;
}

const aula1 = new Aula('Primeira Aula', 123)
const aula2 = new Aula('Segunda Aula', 456);

//Simulando o new 

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Terceira Aula', 789)
