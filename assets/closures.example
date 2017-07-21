function process (bigdata, cb) {
  remoteCall(bigdata, (err, something) => {
    storeSomething(something, (err, res) => {
      cb(null, res * 2)
    })
  })
}
