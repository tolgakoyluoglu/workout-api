import { Request, Response } from 'express'
import { internalServerError } from '../helpers/responses'
import { ExerciseService } from '../services'

class ExerciseController {
  static async get(req: Request, res: Response) {
    try {
      res.json('get exercise')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const exercises = await ExerciseService.find()
      res.json(exercises)
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async getByMusclegroup(req: Request, res: Response) {
    try {
      res.json('get exercise by musclegroup')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async create(req: Request, res: Response) {
    try {
      res.json('create exercise')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async update(req: Request, res: Response) {
    try {
      res.json('update exercise')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      res.json('delete exercise')
    } catch (error) {
      internalServerError(req, res, error)
    }
  }
}

export default ExerciseController
