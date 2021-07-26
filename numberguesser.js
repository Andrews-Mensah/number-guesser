let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



const generateTarget = () => {
  return Math.floor (Math.random() * 10)
}

const getAbsoluteDistance = (guess,target) => {
  Math.abs(guess - target)
}

const compareGuesses = (human, computer, target) => {
  if (getAbsoluteDistance(human,target) <= getAbsoluteDistance(computer,target)) {
    return true
  }else {
  return false
}
}

const updateScore = roundWinner => roundWinner === 'human' ? humanScore++ : computerScore++

const advanceRound = () => correctRoundNumber++
  