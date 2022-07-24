import { Workout } from '../models'
import { Op } from 'sequelize'

class WorkoutService {
  static async find() {
    return await Workout.findAll()
  }

  static async findOne() {}

  static async create() {}

  static async update() {}

  static async delete() {}
}
export default WorkoutService
