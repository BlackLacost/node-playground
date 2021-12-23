'use strict'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

console.log('Start sleep: ' + new Date().toISOString())
console.log('  Sleeep about 3 sec')
sleep(3000).then(() => {
  console.log('After sleep: ' + new Date().toISOString())
})
