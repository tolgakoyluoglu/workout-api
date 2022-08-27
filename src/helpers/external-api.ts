import axios from 'axios'
import { ExerciseService } from '../services'
const { WGER_API_KEY, RAPID_API_KEY } = process.env

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
            bodyPart: exercise.muscles[0].name_en,
            equipment: exercise.equipment.map((eq: any) => eq.name),
            image: exercise.images.map((element: any) => element.image),
          })
        }
      }
    }

    return true
  } catch (error) {
    console.log(error)
  }
}

export const getRapid = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY || '',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    }
    const response = await axios.request(options)
    const result = response.data

    for (const exercise of result) {
      await ExerciseService.create({
        name: exercise.name,
        image: exercise.gifUrl,
        equipment: exercise.equipment,
        bodyPart: exercise.bodyPart,
        target: exercise.target,
      })
    }
    return true
  } catch (error) {
    console.log(error)
  }
}
