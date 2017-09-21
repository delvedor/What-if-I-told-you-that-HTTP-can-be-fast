'use strict'

const fastify = require('fastify')()

fastify.get('/status', (req, reply) => {
  reply.send({ status: 'ok' })
})

fastify.register(
  require('./plugins/store'),
  { prefix: '/store' }
)

fastify.register(
  require('./plugins/generator'),
  { prefix: '/generator' }
)

fastify.listen(8000, err => {
  if (err) throw err
  console.log('Listening on http://localhost:8000')
})
