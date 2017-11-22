const FJS = require('fast-json-stringify')

const stringify = FJS({
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    age: { type: 'integer' }
  }
})

console.log(stringify({
  firstName: 'Tomas',
  lastName: 'Della Vedova',
  age: 24
}))
