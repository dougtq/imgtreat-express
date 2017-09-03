'use strict'

const sharp = require('sharp')

sharp('./assets/iCloud.jpg')
  .resize(300)
  .toFile('./assets/iCloud-resized.jpg', (err, info)=> {
    if (err) throw err.message
  
      console.log( info.channels)
    
  })