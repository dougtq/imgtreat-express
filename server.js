'use strict'

const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs')
let app = express()

let upload = multer({ dest: 'assets/' })

app.post('/resize/:height/:width', upload.any(), (req, res) => {
  let { height, width } = req.params

  res.set('content-type', 'image/jpg')

  sharp(`assets/iCloud.jpg`)
    .resize(Number(width), Number(height))
    .toFile(`assets/${req.file.filename}-${width}-${height}`)
    .pipe(res)
})

app.listen(3000, err => {
  if (err) throw err.message

  console.log('Rodando')
})
