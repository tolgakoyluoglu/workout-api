import { Request, Response } from 'express'
import { internalServerError, UNAUTHORIZED } from '../helpers/responses'
import { WorkoutService } from '../services'

class WorkoutController {
  static async get(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      res.json('get workout')
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
      res.json('create workout')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      res.json('update workout')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { me } = req
      if (!me || !me.id) return res.status(UNAUTHORIZED.code).json(UNAUTHORIZED)
      res.json('delete workout')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }
}

export default WorkoutController
