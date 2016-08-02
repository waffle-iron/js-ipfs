'use strict'

const utils = require('../../utils')

module.exports = {
  command: 'wantlist',

  describe: 'Print out all blocks currently on the bitswap wantlist for the local peer.',

  builder: {
  },

  handler: () => {
    utils.getIPFS((err, ipfs) => {
      if (err) {
        throw err
      }

      ipfs.bitswap.wantlist((err, res) => {
        if (err) {
          throw err
        }
        res.Keys.forEach((k) => console.log(k))
      })
    })
  }
}
