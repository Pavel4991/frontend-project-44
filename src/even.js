import readlineSync from 'readline-sync'

const gameEven = () => {
  console.log('Welcome to the Brain Games!')
  let userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let counter = 0

  while (counter < 3) {
    let magicNumber = 0
    magicNumber += (Math.floor(Math.random() * 100 + 1))

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
