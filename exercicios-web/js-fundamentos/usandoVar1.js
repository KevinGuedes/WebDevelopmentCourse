{
    {
        {
            {
                {
                    var text = "Olá mundo!"
                }
            }
        }
    }
}
console.log(text)
// O escopo, em C# ou Java, por exemplo, seria algo a ser levado em consideração


teste = () => {
    var escopoFuncao = 123
    console.log(escopoFuncao)
}
teste()

console.log(escopoFuncao)
