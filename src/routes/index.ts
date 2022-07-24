const router = require('express').Router()
import users from './users'
import { Request, Response } from 'express'

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Health check OK' })
  console.log('Health check OK')
})
router.use('/users', users)

export default router
