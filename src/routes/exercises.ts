const router = require('express').Router()
import { ExerciseController } from '../controllers'
import authenticate from '../middlewares/authenticate'

router.get('/', authenticate, ExerciseController.getAll)
router.get('/:id', authenticate, ExerciseController.get)
router.get('/muscle/:id', authenticate, ExerciseController.getByMusclegroup)
router.post('/', authenticate, ExerciseController.create)
router.put('/', authenticate, ExerciseController.update)
router.delete('/', authenticate, ExerciseController.delete)

export default router
