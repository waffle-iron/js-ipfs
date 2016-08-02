'use strict'

const debug = require('debug')
const log = debug('cli:bootstrap')
const utils = require('../../utils')
log.error = debug('cli:bootstrap:error')

module.exports = {
  command: 'add',

  describe: 'Add peers to the bootstrap list',

  builder: {},

  handler: (multiaddr) => {
    utils.getIPFS((err, ipfs) => {
      if (err) {
        throw err
      }
      ipfs.bootstrap.add(multiaddr, (err, list) => {
        if (err) {
          throw err
        }
      })
    })
  }
}
