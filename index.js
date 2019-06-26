const fs = require('fs-extra')

// which is this __filename
const filename = 'C:\\projects\\file-check-win\\index.js'
console.log('filename is %s', filename)
fs.pathExists(filename).then(console.log).catch(e => {
  console.error('caught error', e)
})