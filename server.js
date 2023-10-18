import express from 'express'
import 'dotenv/config'
import 'express-async-errors'

import {serverRouter} from './routes/servers.js'
const app = express()
const port = process.env.SERVER_PORT

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})

app.use(express.json())

app.use('/api/servers', serverRouter)
