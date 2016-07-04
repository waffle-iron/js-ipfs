'use strict'

const promisify = require('promisify-es6')

module.exports = function block (self) {
  return {
    get: promisify((multihash, callback) => {
      self._blockS.getBlock(multihash, callback)
    }),
    put: promisify((block, callback) => {
      self._blockS.addBlock(block, callback)
    }),
    del: promisify((multihash, callback) => {
      self._blockS.deleteBlock(multihash, callback)
    }),
    stat: promisify((multihash, callback) => {
      self._blockS.getBlock(multihash, (err, block) => {
        if (err) {
          return callback(err)
        }
        callback(null, {
          Key: multihash,
          Size: block.data.length
        })
      })
    })
  }
}
