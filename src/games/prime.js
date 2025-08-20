import { getRandomNumber, greeting, primeOrNot, gameAction } from '../index.js'

const gamePrime = () => {
  let userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".')

  const generateQuestion = () => {
    let randomNumber = getRandomNumber(1, 100)
    const correctAnswer = primeOrNot(randomNumber)
    console.log(`Question: ${randomNumber}`)
    return correctAnswer
  }

  gameAction(generateQuestion, userName)
}

export default gamePrime
