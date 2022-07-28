import { Exercise } from '../models'

class ExerciseService {
  static async find(data: { page: any; size: any }) {
    const { page, size } = data
    return await Exercise.findAll({ offset: page * size, limit: size })
  }

  static async findOne(id: string) {
    return await Exercise.findByPk(id)
  }

  static async create(data: any) {
    return await Exercise.create(data)
  }

  static async update() {}

  static async delete() {}
}
export default ExerciseService
