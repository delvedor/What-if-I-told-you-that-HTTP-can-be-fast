'use strict'

const fastify = require('fastify')()

fastify.get('/status', (req, reply) => {
  reply.send({ status: 'ok' })
})

fastify.register(
  require('./lib/store'),
  { prefix: '/store' }
)

fastify.register(
  require('./lib/generator'),
  { prefix: '/generator' }
)

fastify.listen(8000, () => {
  console.log('Listening on http://localhost:8000')
})
