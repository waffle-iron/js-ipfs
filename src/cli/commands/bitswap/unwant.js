'use strict'

const utils = require('../../utils')

module.exports = {
  command: 'unwant',

  describe: 'Remove a given block from your wantlist.',

  builder: {
    key: {
      required: true
    }
  },

  handler: (key) => {
    utils.getIPFS((err, ipfs) => {
      if (err) {
        throw err
      }

      throw new Error('Not implemented yet')
    })
  }
}
