'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const App = require('../../app')

test('Status route', async t => {
  const fastify = Fastify()
  fastify.register(App)

  const res = await fastify.inject({ url: '/status' })

  t.strictEqual(res.statusCode, 200)
  t.deepEqual(JSON.parse(res.payload), { status: 'ok' })

  await fastify.close()
})
