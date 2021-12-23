'use strict'

const sleep = (ms) => {
  const end = new Date().getTime() + ms
  while (new Date().getTime() < end) {}
}

console.log('Start sleep: ' + new Date().toISOString())
console.log('  Sleeep about 3 sec')
sleep(3000)
console.log('After sleep: ' + new Date().toISOString())
