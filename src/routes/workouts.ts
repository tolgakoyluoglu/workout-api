const router = require('express').Router()
import { WorkoutController } from '../controllers'
import authenticate from '../middlewares/authenticate'

router.get('/', authenticate, WorkoutController.getAll)
router.get('/:id', authenticate, WorkoutController.get)
router.post('/', authenticate, WorkoutController.create)
router.put('/', authenticate, WorkoutController.update)
router.delete('/', authenticate, WorkoutController.delete)

export default router
