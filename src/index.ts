import express from 'express'
const app = express()
import './config/redis'

const { NODE_ENV } = process.env

// env variables for client
const allowedOrigins: string[] = ['http://localhost:5173', 'http://localhost:3000']
if (NODE_ENV === 'development' || NODE_ENV === 'staging') {
  allowedOrigins.push('')
}

app.use((req, res, next) => {
  const { origin }: any = req.headers
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
  res.setHeader('Access-Control-Allow-Credentials', true.toString())

  next()
})

import { sequelize } from './config/sequelize'

sequelize
  .sync()
  .then((result) => {
    console.log('Init sequelize models.')
  })
  .catch((err) => {
    console.log('Error with sequelize models:', err)
  })

import bodyParser from 'body-parser'
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

import cookieParser from 'cookie-parser'
app.use(cookieParser())

import { logRequests } from './helpers/logger'
app.use(logRequests())

import router from './routes'
app.use(router)

import swaggerUi from 'swagger-ui-express'
import { getRapid } from './helpers/external-api'
if (NODE_ENV === 'development') {
  const swaggerDocument = require('./config/swagger/index')
  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

const PORT: number = parseInt(process.env.PORT as string) || 4000
const HOST: string = process.env.HOST || '0.0.0.0'
app.listen(PORT, HOST, () => {
  console.log('\x1b[36m%s\x1b[0m', `API URL: http://${HOST}:${PORT}`)
  console.log('\x1b[36m%s\x1b[0m', `Docs URL: http://${HOST}:${PORT}/docs`)
})

// getRapid()
