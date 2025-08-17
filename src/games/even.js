import readlineSync from 'readline-sync'
import { getRandomNumber, greeting } from '../index.js'

const gameEven = () => {
  let userName = greeting('Answer "yes" if the number is even, otherwise answer "no".')
  let counter = 0

  while (counter < 3) {
    let magicNumber = getRandomNumber(100)

    const correctAnswer = (magicNumber % 2 === 0) ? 'yes' : 'no'

    console.log(`Question: ${magicNumber}`)
    let answer = readlineSync.question('Your answer: ')

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

export default gameEven
