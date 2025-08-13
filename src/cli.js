import readlineSync from 'readline-sync'

const sayHelloByTheName = () => {
  let userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
}

export default sayHelloByTheName
