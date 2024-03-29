import { Request, Response } from 'express'
import { internalServerError, missingRequired, UNAUTHORIZED } from '../helpers/responses'
import { ExerciseService } from '../services'

class ExerciseController {
  static async get(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)

      const { id } = req.params
      const ERROR = missingRequired({ id })
      if (ERROR) return res.status(ERROR.code).json(ERROR)

      const exercise = await ExerciseService.findOne(id)
      res.json(exercise)
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)

      const { page = 0 } = req.query
      const { bodyPart } = req.params
      const size = 20
      const exercises = await ExerciseService.find({ page, size, bodyPart })
      let isEmpty = false
      if (exercises.length === 0) isEmpty = true
      res.json({ exercises, isEmpty })
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      res.json('create exercise')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      res.json('update exercise')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      res.json('delete exercise')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }
}

export default ExerciseController
