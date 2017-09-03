'use strict'

const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
let app = express()

let upload = multer({ dest: 'assets/' })

app.post('/resize/:height/:width', upload.single('image'), (req, res) => {
  console.log(req.file)
  
  res.json('Hello World')
})

app.listen(3000, err => {
  if (err) throw err.message

  console.log('Rodando')
})
