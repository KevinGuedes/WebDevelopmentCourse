function substituirVetor (arrA, arrB){

    if (arrA.length != arrB.length)
        return 'Tamanhos diferentes'

    console.log('Antes')
    console.log('Vetor A)', arrA)
    console.log('Vetor B)', arrB)

    for (let i = 0; i < arrA.length; i++){
        arrA[i] += arrB[i] 
        arrB[i] = arrA[i] - arrB[i]
        arrA[i] -= arrB[i]
    }
    
    console.log('Depois')
    console.log('Vetor A)', arrA)
    console.log('Vetor B)', arrB)
}


let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

console.log(substituirVetor(vetorA, vetorB))