'use strict'

const utils = require('../../utils')
const debug = require('debug')
const log = debug('cli:swarm')
log.error = debug('cli:swarm:error')

module.exports = {
  command: 'connect',

  describe: 'Open connection to a given address',

  builder: {},

  handler: (address) => {
    if (!address) {
      throw new Error("Argument 'address' is required")
    }

    utils.getIPFS((err, ipfs) => {
      if (err) {
        throw err
      }

      if (!utils.isDaemonOn()) {
        throw new Error('This command must be run in online mode. Try running \'ipfs daemon\' first.')
      }

      ipfs.swarm.connect(address, (err, res) => {
        if (err) {
          throw err
        }

        console.log(res.Strings[0])
      })
    })
  }
}
