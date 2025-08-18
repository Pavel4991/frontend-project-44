import readlineSync from 'readline-sync'
import { getRandomNumber, greeting, getProgression } from '../index.js'

const gameProgression = () => {
  let userName = greeting('What number is missing in the progression?')

  let counter = 0
  while (counter < 3) {
    const a = getRandomNumber(1, 15)
    const b = getRandomNumber(1, 15)
    const index = getRandomNumber(0, 10)
    const progression = getProgression(a, b)
    let correctAnswer = progression[index]
    const question = progression.join().replace(`${correctAnswer},`, '..,').replaceAll(',', ' ')
    console.log(`Question: ${question}`)

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

export default gameProgression
