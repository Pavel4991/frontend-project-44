import { getRandomNumber, greeting, getGCD, gameAction } from '../index.js'

const gameGCD = () => {
  let userName = greeting('Find the greatest common divisor of given numbers.')

  const generateQuestion = () => {
    const a = getRandomNumber(1, 25)
    const b = getRandomNumber(1, 25)
    const correctAnswer = getGCD(a, b)
    console.log(`Question: ${a} ${b}`)
    return correctAnswer
  }

  gameAction(generateQuestion, userName)
}

export default gameGCD
