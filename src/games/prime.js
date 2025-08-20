import readlineSync from 'readline-sync'
import { getRandomNumber, greeting, primeOrNot } from '../index.js'

const gamePrime = () => {
  let userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".')
  let counter = 0

  while (counter < 3) {
    let magicNumber = getRandomNumber(1, 100)

    const correctAnswer = primeOrNot(magicNumber)

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

export default gamePrime
