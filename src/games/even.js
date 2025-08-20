import { getRandomNumber, greeting, gameAction } from '../index.js'

const gameEven = () => {
  let userName = greeting('Answer "yes" if the number is even, otherwise answer "no".')

  const generateQuestion = () => {
    let randomNumber = getRandomNumber(1, 100)
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no'
    console.log(`Question: ${randomNumber}`)
    return correctAnswer
  }

  gameAction(generateQuestion, userName)
}

export default gameEven
