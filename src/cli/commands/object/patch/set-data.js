'use strict'

const utils = require('../../../utils')
const bl = require('bl')
const fs = require('fs')
const debug = require('debug')
const log = debug('cli:object')
log.error = debug('cli:object:error')

function parseAndAddNode (key, data) {
  utils.getIPFS((err, ipfs) => {
    if (err) {
      throw err
    }

    ipfs.object.patch.setData(key, data, {enc: 'base58'}, (err, node) => {
      if (err) {
        throw err
      }

      console.log(node.toJSON().Hash)
    })
  })
}

module.exports = {
  command: 'set-data',

  describe: 'Set data field of an ipfs object',

  builder: {},

  handler: (key, filePath) => {
    if (!key) {
      throw new Error("Argument 'root' is required")
    }

    if (filePath) {
      return parseAndAddNode(key, fs.readFileSync(filePath))
    }

    process.stdin.pipe(bl((err, input) => {
      if (err) {
        throw err
      }

      parseAndAddNode(key, input)
    }))
  }
}
