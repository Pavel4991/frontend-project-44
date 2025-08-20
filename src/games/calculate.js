import { getRandomNumber, greeting, addition, subtraction, multiplication, gameAction } from '../index.js'

const gameCalculate = () => {
  let userName = greeting('What is the result of the expression?')

  const generateQuestion = () => {
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
    return correctAnswer
  }

  gameAction(generateQuestion, userName)
}

export default gameCalculate
