import * as Sequelize from 'sequelize'
import { sequelize } from '../config/sequelize'

export interface WorkoutModel extends Sequelize.Model {
  id: any
  name: string
  description: string
  exercises: string[]
}

export const Workout = sequelize.define<WorkoutModel>(
  'workout',
  {
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
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  },
  { timestamps: false },
)
