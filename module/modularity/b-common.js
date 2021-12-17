'use strict'

// const example8 = require('./8-export.mjs')
const example8 = import('./8-export.mjs')
const promise = import('node:events')
console.log({ promise })

promise.then((events) => {
  console.log({ defaultMaxListeners: events.defaultMaxListeners })
})

console.log({ require })
require = 42
console.log({ require })
