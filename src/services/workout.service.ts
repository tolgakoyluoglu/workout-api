import { Workout } from '../models'
import { ExerciseModel } from '../models/exercise.model'

class WorkoutService {
  static async find() {
    return await Workout.findAll()
  }

  static async findOne(id: string) {
    return await Workout.findOne({ where: { id } })
  }

  static async create(data: { name: string; description: string }) {
    const { name, description } = data
    return await Workout.create({ name, description })
  }

  static async update(data: { name: string; description: string; exercises: ExerciseModel; id: string }) {
    const { name, description, exercises, id } = data
    return await Workout.update({ name, description, exercises }, { where: { id } })
  }

  static async delete(id: string) {
    return await Workout.destroy({ where: { id } })
  }
}
export default WorkoutService
