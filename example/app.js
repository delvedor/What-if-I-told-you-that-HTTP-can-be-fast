'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services')
  })

  fastify.get('/status', async (req, reply) => {
    return { status: 'ok' }
  })
}
