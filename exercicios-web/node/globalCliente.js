requires('./global')
//Basta uma vez na aplicação e o global já possui os elementos adicionados
//Não precisa 2x require

console.log(MinhaApp.saudacao())//objeto disponível globalmente
console.log(global.MinhaApp.saudacao())//objeto disponível globalmente

MinhaApp.nome = 'Eita!' //!passível de modificação = Perigo, utilizar o freeze no global.js
