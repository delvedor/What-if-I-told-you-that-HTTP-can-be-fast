const Ajv = require('ajv')
const ajv = new Ajv({ coerceTypes: true })

const validate = ajv.compile({
  type: 'object',
  properties: {
    greeting: { type: 'string' }
  },
  required: ['greeting']
})

console.log(validate({ greeting: 'hello' }))
