import { Exercise } from '../models'
import { Op } from 'sequelize'

class ExerciseService {
  static async find() {
    return await Exercise.findAll()
  }

  static async findOne() {}

  static async create() {}

  static async update() {}

  static async delete() {}
}
export default ExerciseService
