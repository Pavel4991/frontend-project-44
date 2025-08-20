import { getRandomNumber, greeting, getProgression, gameAction } from '../index.js'

const gameProgression = () => {
  let userName = greeting('What number is missing in the progression?')

  const generateQuestion = () => {
    const a = getRandomNumber(1, 15)
    const b = getRandomNumber(1, 15)
    const index = getRandomNumber(0, 10)
    const progression = getProgression(a, b)
    let correctAnswer = progression[index]
    const question = progression.join().replace(`${progression[index]}`, '..').replaceAll(',', ' ')
    console.log(`Question: ${question}`)
    console.log(index)
    console.log(correctAnswer)
    return correctAnswer
  }

  gameAction(generateQuestion, userName)
}

export default gameProgression
