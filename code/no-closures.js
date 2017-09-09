function process (bigdata, cb) {
  remoteCall(bigdata, (err, something) => {
    callStoreSomething(something, cb)
  })
}

function callStoreSomething(something, cb) {
  storeSomething(something, (err, res) => {
    cb(null, res * 2)
  })
}
