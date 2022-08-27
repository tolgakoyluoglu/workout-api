import { sequelize } from '../config/sequelize'
import { Exercise } from '../models'

class ExerciseService {
  static async find(data: { page: any; size: any; bodyPart?: string }) {
    const { page, size, bodyPart } = data
    if (bodyPart && bodyPart !== 'all') {
      return await Exercise.findAll({ offset: page * size, limit: size, where: { bodyPart } })
    } else {
      return await Exercise.findAll({ offset: page * size, limit: size })
    }
  }

  static async findOne(id: string) {
    return await Exercise.findByPk(id)
  }

  static async create(data: { name: string; image: string; bodyPart: string; target?: string; equipment: string }) {
    return await Exercise.create(data)
  }

  static async update() {}

  static async delete(id: string) {
    return await Exercise.destroy({ where: { id } })
  }
}
export default ExerciseService
