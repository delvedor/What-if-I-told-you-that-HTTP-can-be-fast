'use strict'

async function store (fastify, opts) {
  fastify.register(
    require('fastify-leveldb'),
    { name: 'db' }
  )

  fastify.route({
    method: 'GET',
    url: '/:key',
    schema: {
      params: {
        key: { type: 'string' }
      }
    },
    handler: function (req, reply) {
      return this.level.get(req.params.key)
    }
  })

  fastify.route({
    method: 'POST',
    url: '/:key',
    schema: {
      params: {
        key: { type: 'string' }
      },
      body: {
        type: 'object',
        properties: {
          data: { type: 'string' }
        },
        required: ['data']
      }
    },
    handler: async function (req, reply) {
      await this.level.put(req.params.key, req.body.data)
      return { status: 'ok' }
    }
  })
}

module.exports = store
module.exports.autoPrefix = '/store'
