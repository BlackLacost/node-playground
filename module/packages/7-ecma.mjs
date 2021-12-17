// const { createRequire } = await import('module')
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const c7 = require('Package7')
const m7 = await import('Package7')

console.log({ c7, m7 })
