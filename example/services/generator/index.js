'use strict'

async function generator (fastify, opts) {
  fastify.register(require('point-of-view'), {
    engine: {
      handlebars: require('handlebars')
    },
    templates: __dirname
  })

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      querystring: {
        type: 'object',
        properties: {
          text: { type: 'string' }
        },
        required: ['text']
      }
    },
    handler: function (req, reply) {
      reply.view('/index.html', { text: req.query.text })
    }
  })
}

module.exports = generator
module.exports.autoPrefix = '/generator'
