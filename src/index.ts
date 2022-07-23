import express from 'express'
const app = express()
// import './config/redis'
console.log('hello')
// env variables for client

import { logRequests } from './helpers/logger'
app.use(logRequests())

const PORT: number = parseInt(process.env.PORT as string) || 3000
const HOST: string = process.env.HOST || '0.0.0.0'
app.listen(PORT, HOST, () => {
  console.log('\x1b[36m%s\x1b[0m', `API URL: http://${HOST}:${PORT}`)
  console.log('\x1b[36m%s\x1b[0m', `Docs URL: http://${HOST}:${PORT}/docs`)
})
