import axios from 'axios'
import { ExerciseService } from '../services'
const { WGER_API_KEY } = process.env

export const getExercisesWger = async () => {
  try {
    const response = await axios.get('https://wger.de/api/v2/exerciseinfo/?limit=439&offset=0', {
      headers: {
        Authorization: `Token ${WGER_API_KEY}`,
      },
    })
    const results = response.data.results
    for (const exercise of results) {
      if (exercise.language.short_name === 'en' || exercise.language.short_name === 'sv') {
        if (exercise.images.length > 0) {
          await ExerciseService.create({
            name: exercise.name,
            muscle: {
              name: exercise.muscles[0].name,
              name_en: exercise.muscles[0].name_en,
            },
            musclesSecondary: exercise.muscles_secondary.map((eq: any) => eq.name_en),
            equipment: exercise.equipment.map((eq: any) => eq.name),
            images: exercise.images.map((element: any) => element.image),
          })
        }
      }
    }
    const exercisess = await ExerciseService.find()
    return exercisess
  } catch (error) {
    console.log(error)
  }
}
