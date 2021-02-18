const shopping = (firstJob, secondJob) => {

    const buyIceCream = firstJob || secondJob
    const buyBigTv = firstJob && secondJob
    //!se a partir do primeiro operando for capaz de dar a resposta, ele ignora as demais

    //const buyMediumTv = !!(firstJob ^ secondJob) //xor
    const buyMediumTv = firstJob != secondJob //mesma tabela verdade da xor
    const healthy = !buyIceCream

    return {
        buyIceCream,
        buyBigTv,
        buyMediumTv,
        healthy,
    } //par nome e valor com mesmo nome, não precisa criar o par

}

console.log('01)', shopping(true, true))
console.log('02)', shopping(true, false))
console.log('03)', shopping(false, true))
console.log('04)', shopping(false, false))
