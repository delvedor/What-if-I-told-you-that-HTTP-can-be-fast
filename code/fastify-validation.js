const fastify = require('fastify')()

const options = {
  schema: {
    body: {
      type: 'object',
      properties: {
        greeting: { type: 'string' }
      },
      required: ['greeting']
    }
  }
}

fastify.post('/', options, (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, err => {
  if (err) throw err
})
