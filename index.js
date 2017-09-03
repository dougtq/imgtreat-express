'use strict'

const sharp = require('sharp')

sharp('./assets/file.jpg')
  .resize(300)
  .toFile('./assets/file-resized.jpg', (err, info)=> {
    if (err) throw err.message
  
      console.log( info.channels)
    
  })