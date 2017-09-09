const http = require('http')

const server = http.createServer(handler)

function handler (req, res) {
  res.end(JSON.stringify({ hello: 'world' }))
}

server.listen(3000)
