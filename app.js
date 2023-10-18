const express = require('express')
const app = express()
import 'dotenv/config'
app.use(express.json())


app.list(port, () => {
  console.log(`Server is running on Port ${port}`)
})
