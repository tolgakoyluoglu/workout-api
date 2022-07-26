import { Exercise } from '../models'

class ExerciseService {
  static async find() {
    return await Exercise.findAll()
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
