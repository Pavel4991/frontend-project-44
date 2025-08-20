import readlineSync from 'readline-sync'

const greeting = (task) => {
  console.log('Welcome to the Brain Games!')
  let userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(task)
  return userName
}

const gameAction = (generateQuestion, userName) => {
  let counter = 0
  while (counter < 3) {
    let correctAnswer = generateQuestion()
    let answer = readlineSync.question('Your answer: ')

    if (answer === String(correctAnswer)) {
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

const getRandomNumber = (min, max) => {
  return (Math.floor(Math.random() * max + min))
}

const addition = (a, b) => {
  const correctAnswer = a + b
  console.log(`Question: ${a} + ${b}`)
  return correctAnswer
}
const subtraction = (a, b) => {
  const correctAnswer = a - b
  console.log(`Question: ${a} - ${b}`)
  return correctAnswer
}
const multiplication = (a, b) => {
  const correctAnswer = a * b
  console.log(`Question: ${a} * ${b}`)
  return correctAnswer
}

const getGCD = (a, b) => {
  while (b !== 0) {
    let x = b
    b = a % b
    a = x
  }
  return a
}

const getProgression = (a, b) => {
  const progressionArray = [a]
  while (progressionArray.length !== 10) {
    const x = a + b
    progressionArray.push(x)
    a = x
  }
  return progressionArray
}

const primeNumber = (number) => {
  let result = true

  if (number <= 1) {
    result = false
  }

  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      result = false
    }
  }
  return result
}

const primeOrNot = (number) => {
  return primeNumber(number) === true ? 'yes' : 'no'
}

export { getRandomNumber, greeting, addition, subtraction, multiplication, getGCD, getProgression, primeNumber, primeOrNot, gameAction }
