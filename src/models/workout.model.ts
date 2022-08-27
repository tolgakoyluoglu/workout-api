import * as Sequelize from 'sequelize'
import { sequelize } from '../config/sequelize'
import { ExerciseService } from '../services'
import { Exercise } from './exercise.model'

export interface WorkoutModel extends Sequelize.Model {
  id: any
  name: string
  description: string
}

export const Workout = sequelize.define<WorkoutModel>('workout', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  exercises: {
    type: Sequelize.JSON,
    defaultValue: [],
  },
})
