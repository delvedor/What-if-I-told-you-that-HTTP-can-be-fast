function myPlugin (fastify, opts, next) {
  fastify.register(require('other-plugin'))

  fastify.get('/route', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  next()
}

module.exports = myPlugin
