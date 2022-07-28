import * as Sequelize from 'sequelize'
import { sequelize } from '../config/sequelize'

export interface ExerciseModel extends Sequelize.Model {
  id: any
  name: string
  description: string
  muscles: string[]
  images: string[]
  equipment: string[]
}

export const Exercise = sequelize.define<ExerciseModel>(
  'exercise',
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
      type: Sequelize.TEXT,
    },
    bodyPart: {
      type: Sequelize.STRING,
    },
    target: {
      type: Sequelize.STRING,
    },
    images: {
      type: Sequelize.STRING,
    },
    equipment: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false },
)
