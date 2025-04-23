import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoute } from './routes/transactions'
import { checkSessionIdExists } from './middlewares/check-session-id-exists'

const app = fastify()

app.register(cookie)
app.register(transactionsRoute, {
    prefix: 'transactions'
})

app.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running')
})
