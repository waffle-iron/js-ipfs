'use strict'

const DAGLink = require('ipfs-merkle-dag').DAGLink
const utils = require('../../../utils')
const debug = require('debug')
const log = debug('cli:object')
log.error = debug('cli:object:error')

module.exports = {
  command: 'rm-link',

  describe: 'Remove a link from an object',

  builder: {},

  handler: (root, link) => {
    if (!root) {
      throw new Error("Argument 'root' is required")
    }
    if (!link) {
      throw new Error("Argument 'link' is required")
    }

    utils.getIPFS((err, ipfs) => {
      if (err) {
        throw err
      }

      const dLink = new DAGLink(link)

      ipfs.object.patch.rmLink(root, dLink, {enc: 'base58'}, (err, node) => {
        if (err) {
          throw err
        }

        console.log(node.toJSON().Hash)
      })
    })
  }
}
