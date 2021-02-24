function classificaAluno  (nota) {

    const multiplo = Math.ceil(nota / 5)
    let novaNota = nota

    if((multiplo * 5) - nota < 3)
        novaNota = multiplo * 5

    if(nota >= 40)
        console.log(`Aprovado com nota ${novaNota}`) 
    else
        console.log(`Reprovado com nota ${novaNota}`) 

}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
