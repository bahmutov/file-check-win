const fs = require('fs-extra')
console.log('__filename is %s', __filename)
fs.pathExists(__filename).then(console.log).catch(e => {
  console.error('caught error', e)
})