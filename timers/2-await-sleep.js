'use strict'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

;(async () => {
  console.log('Start sleep: ' + new Date().toISOString())
  console.log('  Sleeep about 3 sec')
  await sleep(3000)
  console.log('After sleep: ' + new Date().toISOString())
})()
