const fs = require('fs-extra')

// which is this __filename
console.log('__filename is %s', __filename)

// const filename = 'C:\\projects\\file-check-win\\index.js'
const filename = process.env.FILE || __filename
console.log('filename is %s', filename)
fs.pathExists(filename)
  .then(console.log)
  .catch(e => {
    console.error('caught error', e)
  })
