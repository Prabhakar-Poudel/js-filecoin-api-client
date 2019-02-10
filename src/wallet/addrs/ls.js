const toUri = require('multiaddr-to-uri')
const { ok } = require('../../fetch')

module.exports = (fetch, config) => {
  return async options => {
    options = options || {}
    const url = `${toUri(config.apiAddr)}/api/wallet/addrs/ls`
    const res = await ok(fetch(url, { signal: options.signal }))
    const data = await res.json()
    return { addresses: data.Addresses }
  }
}
