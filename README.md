# IPFS JavaScript Implementation

![banner](https://ipfs.io/ipfs/QmVk7srrwahXLNmcDYvyUEJptyoxpndnRa57YJ11L4jV26/ipfs.js.png)

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![Coverage Status](https://coveralls.io/repos/github/ipfs/js-ipfs/badge.svg?branch=master)](https://coveralls.io/github/ipfs/js-ipfs?branch=master)
[![Travis CI](https://travis-ci.org/ipfs/js-ipfs.svg?branch=master)](https://travis-ci.org/ipfs/js-ipfs)
[![Circle CI](https://circleci.com/gh/ipfs/js-ipfs.svg?style=svg)](https://circleci.com/gh/ipfs/js-ipfs)
[![Dependency Status](https://david-dm.org/ipfs/js-ipfs.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> IPFS JavaScript implementation.

This repo contains the JavaScript implementation of the IPFS protocol, with feature parity to the [Go implementation](https://github.com/ipfs/go-ipfs).

### Project status

Consult the [Roadmap](/ROADMAP.md) for a complete state description of the project, or you can find `in process` updates in our [`Captain.log`](https://github.com/ipfs/js-ipfs/issues/30). A lot of components can be used currently, but it is a WIP, so beware of the Dragons.

[![](https://camo.githubusercontent.com/561516567e49f00b5a4f489e122ca9d22815b547/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4965685335436f46667a5175512f67697068792e676966)](https://github.com/ipfs/js-ipfs/issues/30)

## Table of Contents

- [Install](#install)
  - [npm](#npm)
  - [Use in Node.js](#use-in-nodejs)
  - [Through command line tool](#through-command-line-tool)
  - [Use in the browser with browserify, webpack or any bundler](#use-in-the-browser-with-browserify-webpack-or-any-bundler)
  - [Use in a browser using a script tag](#use-in-a-browser-using-a-script-tag)
- [Usage](#usage)
  - [Examples](#examples)
  - [API](#api)
- [Packages](#packages)
- [Project structure](#project-structure)
- [IPFS Core implementation architecture](#ipfs-core-implementation-architecture)
    - [IPFS Core](#ipfs-core)
    - [Block Service](#block-service)
    - [DAG Service](#dag-service)
    - [IPFS Repo](#ipfs-repo)
    - [Bitswap](#bitswap)
    - [Files](#files)
    - [Importer](#importer)
- [Contribute](#contribute)
  - [Want to hack on IPFS?](#want-to-hack-on-ipfs)
- [License](#license)

## Install

### npm

This project is available through [npm](https://www.npmjs.com/). To install:

```bash
$ npm install ipfs --save
```

### Use in Node.js

To include this project programmatically:

```js
var IPFS = require('ipfs')

var node = new IPFS()
```

### Through command line tool

In order to use js-ipfs as a CLI, you must install it with the `global` flag. Run the following (even if you have ipfs installed locally):

```bash
$ npm install ipfs --global
```

The CLI is available by using the command `jsipfs` in your terminal. This is aliased, instead of using `ipfs`, to make sure it does not conflict with the Go implementation.

### Use in the browser with browserify, webpack or any bundler

The code published to npm that gets loaded on require is in fact a ES5 transpiled version with the right shims added. This means that you can require it and use with your favourite bundler without having to adjust the asset management process.

### Use in a browser using a script tag

Simply include ipfs in your bundled javascript file.

```html
<script type="text/javascript" src="assets/bundled.js"></script>
```

## Usage

### Examples

> **Will come soon**

### API

> **Will come soon**

## Packages

| Package | Version | Dependencies | DevDependencies |
|--------|-------|------------|----------|
| [`ipfs`](//github.com/ipfs/js-ipfs) | [![npm](https://img.shields.io/npm/v/ipfs.svg?maxAge=86400&style=flat-square)](https://github.com/ipfs/js-ipfs/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-ipfs.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs) | [![devDependency Status](https://david-dm.org/ipfs/js-ipfs/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs?type=dev) |
| [`ipfs-api`](//github.com/ipfs/js-ipfs-api) | [![npm](https://img.shields.io/npm/v/ipfs-api.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-ipfs-api/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-ipfs-api.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-api) | [![devDependency Status](https://david-dm.org/ipfs/js-ipfs-api/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-api?type=dev) |
| [`ipfs-unixfs-engine`](//github.com/ipfs/js-ipfs-unixfs-engine) | [![npm](https://img.shields.io/npm/v/ipfs-unixfs-engine.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-ipfs-unixfs-engine/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-ipfs-unixfs-engine.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-unixfs-engine) | [![devDependency Status](https://david-dm.org/ipfs/js-ipfs-unixfs-engine/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-unixfs-engine?type=dev) |
| [`ipfs-repo`](//github.com/ipfs/js-ipfs-repo) | [![npm](https://img.shields.io/npm/v/ipfs-repo.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-ipfs-repo/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-ipfs-repo.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-repo) | [![devDependency Status](https://david-dm.org/ipfs/js-ipfs-repo/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-repo?type=dev) |
| [`ipfs-unixfs`](//github.com/ipfs/js-ipfs-unixfs) | [![npm](https://img.shields.io/npm/v/ipfs-unixfs.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-ipfs-unixfs/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-ipfs-unixfs.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-unixfs) | [![devDependency Status](https://david-dm.org/ipfs/js-ipfs-unixfs/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-unixfs?type=dev) |
| [`ipfs-block-service`](//github.com/ipfs/js-ipfs-block-service) | [![npm](https://img.shields.io/npm/v/ipfs-block-service.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-ipfs-block-service/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-ipfs-block-service.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-block-service) | [![devDependency Status](https://david-dm.org/ipfs/js-ipfs-block-service/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-block-service?type=dev) |
| [`ipfs-block`](//github.com/ipfs/js-ipfs-block) | [![npm](https://img.shields.io/npm/v/ipfs-block.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-ipfs-block/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-ipfs-block.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-block) | [![devDependency Status](https://david-dm.org/ipfs/js-ipfs-block/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipfs-block?type=dev) |
| [`peer-id`](//github.com/diasdavid/js-peer-id) | [![npm](https://img.shields.io/npm/v/peer-id.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-peer-id/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-peer-id.svg?style=flat-square)](https://david-dm.org/diasdavid/js-peer-id) | [![devDependency Status](https://david-dm.org/diasdavid/js-peer-id/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-peer-id?type=dev) |
| [`peer-info`](//github.com/diasdavid/js-peer-info) | [![npm](https://img.shields.io/npm/v/peer-info.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-peer-info/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-peer-info.svg?style=flat-square)](https://david-dm.org/diasdavid/js-peer-info) | [![devDependency Status](https://david-dm.org/diasdavid/js-peer-info/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-peer-info?type=dev) |
| [`ipfs-merkle-dag`](//github.com/vijayee/js-ipfs-merkle-dag) | [![npm](https://img.shields.io/npm/v/ipfs-merkle-dag.svg?maxAge=86400&style=flat-square)](//github.com/vijayee/js-ipfs-merkle-dag/releases) | [![Dependency Status](https://david-dm.org/vijayee/js-ipfs-merkle-dag.svg?style=flat-square)](https://david-dm.org/vijayee/js-ipfs-merkle-dag) | [![devDependency Status](https://david-dm.org/vijayee/js-ipfs-merkle-dag/dev-status.svg?style=flat-square)](https://david-dm.org/vijayee/js-ipfs-merkle-dag?type=dev) |
| [`ipfs-multipart`](//github.com/xicombd/ipfs-multipart) | [![npm](https://img.shields.io/npm/v/ipfs-multipart.svg?maxAge=86400&style=flat-square)](//github.com/xicombd/ipfs-multipart/releases) | [![Dependency Status](https://david-dm.org/xicombd/ipfs-multipart.svg?style=flat-square)](https://david-dm.org/xicombd/ipfs-multipart) | [![devDependency Status](https://david-dm.org/xicombd/ipfs-multipart/dev-status.svg?style=flat-square)](https://david-dm.org/xicombd/ipfs-multipart?type=dev) |
| [`multiaddr`](//github.com/jbenet/js-multiaddr) | [![npm](https://img.shields.io/npm/v/multiaddr.svg?maxAge=86400&style=flat-square)](//github.com/jbenet/js-multiaddr/releases) | [![Dependency Status](https://david-dm.org/jbenet/js-multiaddr.svg?style=flat-square)](https://david-dm.org/jbenet/js-multiaddr) | [![devDependency Status](https://david-dm.org/jbenet/js-multiaddr/dev-status.svg?style=flat-square)](https://david-dm.org/jbenet/js-multiaddr?type=dev) |
| [`multihashing`](//github.com/jbenet/js-multihashing) | [![npm](https://img.shields.io/npm/v/multihashing.svg?maxAge=86400&style=flat-square)](//github.com/jbenet/js-multihashing/releases) | [![Dependency Status](https://david-dm.org/jbenet/js-multihashing.svg?style=flat-square)](https://david-dm.org/jbenet/js-multihashing) | [![devDependency Status](https://david-dm.org/jbenet/js-multihashing/dev-status.svg?style=flat-square)](https://david-dm.org/jbenet/js-multihashing?type=dev) |
| [`multihashes`](//github.com/jbenet/js-multihash) | [![npm](https://img.shields.io/npm/v/multihashes.svg?maxAge=86400&style=flat-square)](//github.com/jbenet/js-multihash/releases) | [![Dependency Status](https://david-dm.org/jbenet/js-multihash.svg?style=flat-square)](https://david-dm.org/jbenet/js-multihash) | [![devDependency Status](https://david-dm.org/jbenet/js-multihash/dev-status.svg?style=flat-square)](https://david-dm.org/jbenet/js-multihash?type=dev) |
| [`mafmt`](//github.com/whyrusleeping/js-mafmt) | [![npm](https://img.shields.io/npm/v/mafmt.svg?maxAge=86400&style=flat-square)](//github.com/whyrusleeping/js-mafmt/releases) | [![Dependency Status](https://david-dm.org/whyrusleeping/js-mafmt.svg?style=flat-square)](https://david-dm.org/whyrusleeping/js-mafmt) | [![devDependency Status](https://david-dm.org/whyrusleeping/js-mafmt/dev-status.svg?style=flat-square)](https://david-dm.org/whyrusleeping/js-mafmt?type=dev) |

In addition there is the libp2p module family that makes up the network layer.

| Package | Version | Dependencies | DevDependencies |
|--------|-------|------------|----------|
| [`peer-book`](//github.com/libp2p/js-peer-book) | [![npm](https://img.shields.io/npm/v/peer-book.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-peer-book/releases) | [![Dependency Status](https://david-dm.org/libp2p/js-peer-book.svg?style=flat-square)](https://david-dm.org/libp2p/js-peer-book) | [![devDependency Status](https://david-dm.org/libp2p/js-peer-book/dev-status.svg?style=flat-square)](https://david-dm.org/libp2p/js-peer-book?type=dev) |
| [`libp2p-ipfs`](//github.com/ipfs/js-libp2p-ipfs) | [![npm](https://img.shields.io/npm/v/libp2p-ipfs.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-libp2p-ipfs/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-libp2p-ipfs.svg?style=flat-square)](https://david-dm.org/ipfs/js-libp2p-ipfs) | [![devDependency Status](https://david-dm.org/ipfs/js-libp2p-ipfs/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-libp2p-ipfs?type=dev) |
| [`libp2p-ipfs-browser`](//github.com/ipfs/js-libp2p-ipfs-browser) | [![npm](https://img.shields.io/npm/v/libp2p-ipfs-browser.svg?maxAge=86400&style=flat-square)](//github.com/ipfs/js-libp2p-ipfs-browser/releases) | [![Dependency Status](https://david-dm.org/ipfs/js-libp2p-ipfs-browser.svg?style=flat-square)](https://david-dm.org/ipfs/js-libp2p-ipfs-browser) | [![devDependency Status](https://david-dm.org/ipfs/js-libp2p-ipfs-browser/dev-status.svg?style=flat-square)](https://david-dm.org/ipfs/js-libp2p-ipfs-browser?type=dev) |
| [`libp2p-secio`](//github.com/libp2p/js-libp2p-secio) | [![npm](https://img.shields.io/npm/v/libp2p-secio.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p-secio/releases) | [![Dependency Status](https://david-dm.org/libp2p/js-libp2p-secio.svg?style=flat-square)](https://david-dm.org/libp2p/js-libp2p-secio) | [![devDependency Status](https://david-dm.org/libp2p/js-libp2p-secio/dev-status.svg?style=flat-square)](https://david-dm.org/libp2p/js-libp2p-secio?type=dev) |
| [`libp2p-swarm`](//github.com/diasdavid/js-libp2p-swarm) | [![npm](https://img.shields.io/npm/v/libp2p-swarm.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-swarm/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-swarm.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-swarm) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-swarm/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-swarm?type=dev) |
| [`libp2p-ping`](//github.com/diasdavid/js-libp2p-ping) | [![npm](https://img.shields.io/npm/v/libp2p-ping.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-ping/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-ping.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-ping) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-ping/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-ping?type=dev) |
| [`interface-connection`](//github.com/diasdavid/interface-connection) | [![npm](https://img.shields.io/npm/v/interface-connection.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/interface-connection/releases) | [![Dependency Status](https://david-dm.org/diasdavid/interface-connection.svg?style=flat-square)](https://david-dm.org/diasdavid/interface-connection) | [![devDependency Status](https://david-dm.org/diasdavid/interface-connection/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/interface-connection?type=dev) |
| [`libp2p-utp`](//github.com/diasdavid/js-libp2p-utp) | [![npm](https://img.shields.io/npm/v/libp2p-utp.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-utp/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-utp.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-utp) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-utp/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-utp?type=dev) |
| [`interface-stream-muxer`](//github.com/diasdavid/interface-stream-muxer) | [![npm](https://img.shields.io/npm/v/interface-stream-muxer.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/interface-stream-muxer/releases) | [![Dependency Status](https://david-dm.org/diasdavid/interface-stream-muxer.svg?style=flat-square)](https://david-dm.org/diasdavid/interface-stream-muxer) | [![devDependency Status](https://david-dm.org/diasdavid/interface-stream-muxer/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/interface-stream-muxer?type=dev) |
| [`libp2p-spdy`](//github.com/diasdavid/js-libp2p-spdy) | [![npm](https://img.shields.io/npm/v/libp2p-spdy.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-spdy/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-spdy.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-spdy) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-spdy/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-spdy?type=dev) |
| [`libp2p-kad-routing`](//github.com/diasdavid/js-libp2p-kad-routing) | [![npm](https://img.shields.io/npm/v/libp2p-kad-routing.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-kad-routing/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-kad-routing.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-kad-routing) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-kad-routing/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-kad-routing?type=dev) |
| [`libp2p-mdns-discovery`](//github.com/diasdavid/js-libp2p-mdns-discovery) | [![npm](https://img.shields.io/npm/v/libp2p-mdns-discovery.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-mdns-discovery/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-mdns-discovery.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-mdns-discovery) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-mdns-discovery/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-mdns-discovery?type=dev) |
| [`libp2p-railing`](//github.com/diasdavid/js-libp2p-railing) | [![npm](https://img.shields.io/npm/v/libp2p-railing.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-railing/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-railing.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-railing) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-railing/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-railing?type=dev) |
| [`libp2p-record`](//github.com/diasdavid/js-libp2p-record) | [![npm](https://img.shields.io/npm/v/libp2p-record.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-record/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-record.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-record) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-record/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-record?type=dev) |
| [`interface-record-store`](//github.com/diasdavid/interface-record-store) | [![npm](https://img.shields.io/npm/v/interface-record-store.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/interface-record-store/releases) | [![Dependency Status](https://david-dm.org/diasdavid/interface-record-store.svg?style=flat-square)](https://david-dm.org/diasdavid/interface-record-store) | [![devDependency Status](https://david-dm.org/diasdavid/interface-record-store/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/interface-record-store?type=dev) |
| [`libp2p-distributed-record-store`](//github.com/diasdavid/js-libp2p-distributed-record-store) | [![npm](https://img.shields.io/npm/v/undefined.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-distributed-record-store/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-distributed-record-store.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-distributed-record-store) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-distributed-record-store/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-distributed-record-store?type=dev) |
| [`libp2p-kad-record-store`](//github.com/diasdavid/js-libp2p-kad-record-store) | [![npm](https://img.shields.io/npm/v/libp2p-kad-record-store.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-kad-record-store/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-kad-record-store.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-kad-record-store) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-kad-record-store/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-kad-record-store?type=dev) |
| [`libp2p-websockets`](//github.com/diasdavid/js-libp2p-websockets) | [![npm](https://img.shields.io/npm/v/libp2p-websockets.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-libp2p-websockets/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-libp2p-websockets.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-websockets) | [![devDependency Status](https://david-dm.org/diasdavid/js-libp2p-websockets/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-libp2p-websockets?type=dev) |
| [`libp2p-webrtc-star`](//github.com/libp2p/js-libp2p-webrtc-star) | [![npm](https://img.shields.io/npm/v/libp2p-webrtc-star.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p-webrtc-star/releases) | [![Dependency Status](https://david-dm.org/libp2p/js-libp2p-webrtc-star.svg?style=flat-square)](https://david-dm.org/libp2p/js-libp2p-webrtc-star) | [![devDependency Status](https://david-dm.org/libp2p/js-libp2p-webrtc-star/dev-status.svg?style=flat-square)](https://david-dm.org/libp2p/js-libp2p-webrtc-star?type=dev) |
| [`multistream-select`](//github.com/diasdavid/js-multistream) | [![npm](https://img.shields.io/npm/v/multistream-select.svg?maxAge=86400&style=flat-square)](//github.com/diasdavid/js-multistream/releases) | [![Dependency Status](https://david-dm.org/diasdavid/js-multistream.svg?style=flat-square)](https://david-dm.org/diasdavid/js-multistream) | [![devDependency Status](https://david-dm.org/diasdavid/js-multistream/dev-status.svg?style=flat-square)](https://david-dm.org/diasdavid/js-multistream?type=dev) |


## Project structure

```
┌───┐    ┌───────────────┐    ┌──────────────┐
│CLI│───▶│   HTTP API    ├───▶│IPFS Core Impl│
└───┘    └───────────────┘    └──────────────┘
  △              △                    △
  └──────────────└──────────┬─────────┘
                            │
                         ┌─────┐
                         │Tests│
                         └─────┘
```

## IPFS Core implementation architecture

IPFS Core is divided into separate subsystems, each of them exist in their own repo/module. The dependencies between each subsystem is assured by injection at the IPFS Core level. IPFS Core exposes an API, defined by the IPFS API spec. libp2p is the networking layer used by IPFS, but out of scope in IPFS core, follow that project [here](https://github.com/diasdavid/js-libp2p)


```
             ▶  ┌───────────────────────────────────────────────────────────────────────────────┐
                │                                   IPFS Core                                   │
             │  └───────────────────────────────────────────────────────────────────────────────┘
                                                        │
             │                                          │
                                                        │
             │            ┌──────────────┬──────────────┼────────────┬─────────────────┐
                          │              │              │            │                 │
             │            │              │              │            │                 │
                          ▼              │              ▼            │                 ▼
             │  ┌──────────────────┐     │    ┌──────────────────┐   │       ┌──────────────────┐
                │                  │     │    │                  │   │       │                  │
             │  │  Block Service   │     │    │   DAG Service    │   │       │    IPFS Repo     │
                │                  │     │    │                  │   │       │                  │
             │  └──────────────────┘     │    └──────────────────┘   │       └──────────────────┘
                          │              │              │            │
  IPFS Core  │            ▼              │         ┌────┴────┐       │
                     ┌────────┐          │         ▼         ▼       │
             │       │ Block  │          │    ┌────────┐┌────────┐   │
                     └────────┘          │    │DAG Node││DAG Link│   │
             │                           │    └────────┘└────────┘   │
                ┌──────────────────┐     │                           │       ┌──────────────────┐
             │  │                  │     │                           │       │                  │
                │    Bitswap       │◀────┤                           ├──────▶│    Importer      │
             │  │                  │     │                           │       │                  │
                └──────────────────┘     │                           │       └──────────────────┘
             │                           │                           │                 │
                                         │                           │            ┌────┴────┐
             │                           │                           │            ▼         ▼
                                         │                           │       ┌────────┐┌────────┐
             │  ┌──────────────────┐     │                           │       │ layout ││chunker │
                │                  │     │              ┌────────────┘       └────────┘└────────┘
             │  │    Files         │◀────┘              │
                │                  │                    │
             │  └──────────────────┘                    │
             ▶                                          │
                                                        ▼
                ┌───────────────────────────────────────────────────────────────────────────────┐
                │                                                                               │
                │                                                                               │
                │                                                                               │
                │                                 libp2p                                        │
                │                                                                               │
                │                                                                               │
                └───────────────────────────────────────────────────────────────────────────────┘
```

#### IPFS Core

IPFS Core is the entry point module for IPFS. It exposes an interface defined on [IPFS Specs.](https://github.com/ipfs/specs/blob/ipfs/api/api/core/README.md)

#### Block Service

Block Service uses IPFS Repo (local storage) and Bitswap (network storage) to store and fetch blocks. A block is a serialized MerkleDAG node.

#### DAG Service

DAG Service offers some graph language semantics on top of the MerkleDAG, composed by DAG Nodes (which can have DAG Links). It uses the Block Service as its storage and discovery service.

#### IPFS Repo

IPFS Repo is storage driver of IPFS, follows the [IPFS Repo Spec](https://github.com/ipfs/specs/tree/master/repo) and supports the storage of different types of files.

#### Bitswap

Bitswap is the exchange protocol used by IPFS to 'trade' blocks with other IPFS nodes.

#### Files

Files is the API that lets us work with IPFS objects (DAG Nodes) as if they were Unix Files.

#### Importer

Importer are a set of layouts (e.g. UnixFS) and chunkers (e.g: fixed-size, rabin, etc) that convert data to a MerkleDAG representation inside IPFS.


## Contribute

IPFS implementation in JavaScript is a work in progress. As such, there's a few things you can do right now to help out:

  * Go through the modules below and **check out existing issues**. This would be especially useful for modules in active development. Some knowledge of IPFS may be required, as well as the infrastructure behind it - for instance, you may need to read up on p2p and more complex operations like muxing to be able to help technically.
  * **Perform code reviews**. More eyes will help a) speed the project along b) ensure quality and c) reduce possible future bugs.
  * Take a look at go-ipfs and some of the planning repositories or issues: for instance, the libp2p spec [here](https://github.com/ipfs/specs/pull/19). Contributions here that would be most helpful are **top-level comments** about how it should look based on our understanding. Again, the more eyes the better.
  * **Add tests**. There can never be enough tests.
  * **Contribute to the [FAQ repository](https://github.com/ipfs/faq/issues)** with any questions you have about IPFS or any of the relevant technology. A good example would be asking, 'What is a merkledag tree?'. If you don't know a term, odds are, someone else doesn't either. Eventually, we should have a good understanding of where we need to improve communications and teaching together to make IPFS and IPN better.

### Want to hack on IPFS?

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

MIT.
