import fastify from 'fastify'
import { knex } from './database'
import { randomUUID } from 'crypto'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
    const transaction = await knex('transactions').insert({
        id: randomUUID(),
        title: 'Transação de teste',
        amount: 1000
    })

    return transaction
})

app.get('/', async (request, reply) => {
    const transactions = await knex('transactions')
        .where('amount', 1000)
        .select('*')

    return transactions
})

app.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running')
})
