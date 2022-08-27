import { Request, Response } from 'express'
import { internalServerError, missingRequired, UNAUTHORIZED } from '../helpers/responses'
import { ExerciseService, WorkoutService } from '../services'

class WorkoutController {
  static async get(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)

      const { id } = req.params
      const ERROR = missingRequired({ id })
      if (ERROR) return res.status(ERROR.code).json(ERROR)

      const workout = await WorkoutService.findOne(id)
      res.json(workout)
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      const workouts = await WorkoutService.find()
      res.json(workouts)
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)

      const { name, description } = req.body
      const ERROR = missingRequired({ name })
      if (ERROR) return res.status(ERROR.code).json(ERROR)

      const workout = await WorkoutService.create({ name, description })
      res.json(workout)
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      const { name, description, exercises, id } = req.body
      const ERROR = missingRequired({ id })
      if (ERROR) return res.status(ERROR.code).json(ERROR)

      const workout = await WorkoutService.update({ name, description, exercises, id })
      res.json(workout)
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)

      const { id } = req.body
      const ERROR = missingRequired({ id })
      if (ERROR) return res.status(ERROR.code).json(ERROR)

      const workout = await WorkoutService.delete(id)
      res.json(workout)
    } catch (error) {
      internalServerError(req, res, error)
    }
  }
}

export default WorkoutController
