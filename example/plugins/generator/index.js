'use strict'

function generator (fastify, opts, next) {
  fastify.register(require('point-of-view'), {
    engine: {
      handlebars: require('handlebars')
    },
    templates: __dirname
  })

  fastify.get('/', {
    querystring: {
      type: 'object',
      properties: {
        text: { type: 'string' }
      },
      required: ['text']
    }
  }, (req, reply) => {
    reply.view('/index.html', { text: req.query.text })
  })

  next()
}

module.exports = generator
