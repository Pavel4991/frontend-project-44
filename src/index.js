import readlineSync from 'readline-sync'

const greeting = (task) => {
  console.log('Welcome to the Brain Games!')
  let userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(task)
  return userName
}

const getRandomNumber = (n) => {
  return (Math.floor(Math.random() * n + 1))
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

export { getRandomNumber, greeting, addition, subtraction, multiplication, getGCD }
