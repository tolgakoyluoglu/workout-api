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
      type: Sequelize.STRING,
    },
    muscles: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    equipment: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  },
  { timestamps: false },
)
