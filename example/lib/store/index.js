'use strict'

function store (fastify, opts, next) {
  fastify.register(
    require('fastify-leveldb'),
    { name: 'db' }
  )

  fastify.get('/:key', {
    schema: {
      params: {
        type: 'object',
        properties: {
          key: { type: 'string' }
        }
      }
    }
  }, (req, reply) => {
    fastify.level.get(req.params.key, (err, data) => {
      reply.send(err || data)
    })
  })

  fastify.post('/:key', {
    schema: {
      params: {
        type: 'object',
        properties: {
          key: { type: 'string' }
        }
      },
      body: {
        type: 'object',
        properties: {
          data: { type: 'string' }
        },
        required: ['data']
      }
    }
  }, (req, reply) => {
    fastify.level.put(req.params.key, req.body.data, err => {
      reply.send(err || { status: 'ok' })
    })
  })

  next()
}

module.exports = store
