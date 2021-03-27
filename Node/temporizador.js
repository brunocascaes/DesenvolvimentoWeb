const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * 4', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds(), new Date().getHours())
})

/*
de 5 em 5 segundos quaisquer (/5: no segundo 5)
qualquer minuto
qualquer hora
em qualquer mes
em qualquer dia do mes
na quinta-feira
*/

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 2
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})