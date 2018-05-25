'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const App = require('../../app')

test('Store service', async t => {
  const fastify = Fastify()
  fastify.register(App)

  var res = await fastify.inject({
    method: 'POST',
    url: '/store/foo',
    payload: { data: 'bar' }
  })

  t.strictEqual(res.statusCode, 200)
  t.deepEqual(JSON.parse(res.payload), { status: 'ok' })

  res = await fastify.inject({
    method: 'GET',
    url: '/store/foo'
  })

  t.strictEqual(res.statusCode, 200)
  t.strictEqual(res.payload, 'bar')

  await fastify.close()
})

test('Store service (404)', async t => {
  const fastify = Fastify()
  fastify.register(App)

  const res = await fastify.inject({
    method: 'GET',
    url: '/store/baz'
  })

  t.strictEqual(res.statusCode, 404)
  t.deepEqual(JSON.parse(res.payload), {
    error: 'Not Found',
    message: 'Not Found',
    statusCode: 404
  })

  await fastify.close()
})
