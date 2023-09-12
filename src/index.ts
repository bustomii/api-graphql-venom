import { middleware } from './postgraphiql'
import router from './router'
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { PORT } = process.env

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(middleware)
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
