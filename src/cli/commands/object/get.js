'use strict'

const utils = require('../../utils')
const debug = require('debug')
const log = debug('cli:object')
log.error = debug('cli:object:error')

module.exports = {
  command: 'get',

  describe: 'Get and serialize the DAG node named by <key>',

  builder: {},

  handler: (key) => {
    if (!key) {
      throw new Error("Argument 'key' is required")
    }

    utils.getIPFS((err, ipfs) => {
      if (err) {
        throw err
      }

      ipfs.object.get(key, {enc: 'base58'}, (err, node) => {
        if (err) {
          throw err
        }

        const res = node.toJSON()
        res.Data = res.Data ? res.Data.toString() : ''
        console.log(JSON.stringify(res))
      })
    })
  }
}
