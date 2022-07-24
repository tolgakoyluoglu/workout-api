const router = require('express').Router()
import users from './users'
import exercises from './exercises'
import workouts from './workouts'
import { Request, Response } from 'express'

// Health check
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Health check OK' })
  console.log('Health check OK')
})

// Routes
router.use('/users', users)
router.use('/exercises', exercises)
router.use('/workouts', workouts)
export default router
