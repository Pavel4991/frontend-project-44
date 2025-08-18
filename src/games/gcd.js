import readlineSync from 'readline-sync'
import { getRandomNumber, greeting, getGCD } from '../index.js'

const gameGCD = () => {
  let userName = greeting('Find the greatest common divisor of given numbers.')
  let counter = 0

  while (counter < 3) {
    const a = getRandomNumber(25)
    const b = getRandomNumber(25)
    const correctAnswer = getGCD(a, b)
    console.log(`Question: ${a}, ${b}`)
    let answer = Number(readlineSync.question('Your answer: '))
    if (answer === correctAnswer) {
      console.log('Correct!')
      counter += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`)
      break
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`)
  }
}

export default gameGCD
