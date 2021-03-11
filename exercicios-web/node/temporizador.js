const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 3', () => {
    console.log('Executando Tarefa 1: ', new Date().getSeconds())
})
// se fosse só 5, seria só no segundo 5
//5 em 5 segundos
//Qualquer minuto
//19h
//ignorar dia do mês
//ignorar o mês
//quarta feira (domingo - 0)

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)
//setImmediate -> setTimeout com tempo = 0
//setInterval -> executa a cada intervalo

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //segunda - sexta
regra.hour = 20
regra.second = 30
//dias de semana, hora 20, segundo 30
const tarefa2 = new schedule.scheduleJob(regra, () => {
    console.log('Executando Tarefa 2', new Date().getSeconds())
})
