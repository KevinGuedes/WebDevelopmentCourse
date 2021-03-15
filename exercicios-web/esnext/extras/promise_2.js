//!Callback hell
//Código muito aninhado
// setTimeout(() => {
//     console.log('Callback nv 1')
//     setTimeout(() => {
//         console.log('Callback nv 2')
//         setTimeout(() => {
//             console.log('Callback nv 3')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando Promise')
            resolve()
        }, tempo)
    })
}

let p = esperarPor()
    .then(esperarPor)
    .then(esperarPor)
