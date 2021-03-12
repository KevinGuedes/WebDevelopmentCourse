function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { //uma função assíncrona
        if (segundos > 2)
            reject('Tempo muito longo')
        else {
            setTimeout(() => {
                resolve(frase) //assim como o resolve, retorna somente um argumento (que pode ser um objeto, array)
            }, segundos * 1000)
        }
    })
}

falarDepoisDe(2, 'Que legal')
    .then((frase, abc) => {
        console.log(abc)
        return frase.concat('!!!')
    })
    .then(frase => console.log(frase)) //pode encadear vários then
    .catch(err => console.log(err)) //em caso de reject
