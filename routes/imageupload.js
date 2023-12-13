const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const Multer = require('multer')
const imgUpload = require('../modules/imgUpload')

const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024
})

const connection = mysql.createConnection({
  host: '34.28.5.234',
  user: 'root',
  database: 'transaction-db',
  password: '123456'
})