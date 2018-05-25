'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const App = require('../../app')

test('Generator service', async t => {
  const fastify = Fastify()
  fastify.register(App)

  const res = await fastify.inject({ url: '/generator?text=test' })

  t.strictEqual(res.statusCode, 200)
  t.strictEqual(res.headers['content-type'], 'text/html; charset=utf-8')
  t.strictEqual(res.payload, `<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    <p>test</p>
  </body>
</html>
`)

  await fastify.close()
})

test('Generator service (400)', async t => {
  const fastify = Fastify()
  fastify.register(App)

  const res = await fastify.inject({ url: '/generator' })

  t.strictEqual(res.statusCode, 400)
  t.deepEqual(JSON.parse(res.payload), {
    error: 'Bad Request',
    message: 'querystring should have required property \'text\'',
    statusCode: 400
  })

  await fastify.close()
})
