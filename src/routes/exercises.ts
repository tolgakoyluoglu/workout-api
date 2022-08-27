const router = require('express').Router()
import { ExerciseController } from '../controllers'
import authenticate from '../middlewares/authenticate'

router.get('/:bodyPart', authenticate, ExerciseController.getAll)
router.get('/exercise/:id', authenticate, ExerciseController.get)
router.post('/', authenticate, ExerciseController.create)
router.put('/', authenticate, ExerciseController.update)
router.delete('/', authenticate, ExerciseController.delete)

export default router
