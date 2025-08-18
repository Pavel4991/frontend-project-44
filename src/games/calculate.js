import readlineSync from 'readline-sync'
import { getRandomNumber, greeting, addition, subtraction, multiplication } from '../index.js'

const gameCalculate = () => {
  let userName = greeting('What is the result of the expression?')

  let counter = 0
  while (counter < 3) {
    const a = getRandomNumber(1, 25)
    const b = getRandomNumber(1, 25)
    let correctAnswer = 0
    switch (getRandomNumber(1, 3)) {
      case 1:
        correctAnswer = addition(a, b)
        break
      case 2:
        correctAnswer = subtraction(a, b)
        break
      case 3:
        correctAnswer = multiplication(a, b)
        break
    }
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

export default gameCalculate
