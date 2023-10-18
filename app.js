const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT


app.use(express.json())


app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})
