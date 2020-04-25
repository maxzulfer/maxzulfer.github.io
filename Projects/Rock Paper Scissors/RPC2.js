// Rock Paper Scissors

// computer choice function
// comparative function
// winner function
// game over function
// reset button
console.log('Welcome to Ro-Sham-Bo!')
console.log('You will be playing against the computer. First one to five wins. Good Luck!')
console.log('1 = Rock')
console.log('2 = Paper')
console.log('3 = Scissors')

let round = 1;

let computerScore = 0;
let playerScore = 0;

let playerChoice;
let computerChoice;

console.log('Round: ' + round)
console.log('Computer Score: ' + computerScore)
console.log('Player Score: ' + playerScore)

// generates randon computer choice
const computerChoiceGen = () => {
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        computerChoice = 'rock'
    } else if (num === 1) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
}

computerChoiceGen();
console.log('computer choice: ' + computerChoice)


const playerChoiceGen = (selection) => {
    if (selection === 1) {
        playerChoice = 'rock'
    } else if (selection === 2) {
        playerChoice = 'paper'
    } else {
        playerChoice = 'scissors'
    }
}

playerChoiceGen(2)
console.log('player choice: ' + playerChoice)

// this still needs a tie function
const winner = () => {
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Win!')
        playerScore += 1
        round += 1
    } else {
        console.log('You Lost ):')
        computerScore += 1
        round +=1 
    } if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win!')
        playerChoice += 1
        round += 1
    } else {
        console.log('You Lost ):')
        computerScore += 1
        round += 1
    } if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You Win!')
        playerScore += 1
        round += 1
    } else {
        console.log('You Lost')
        computerScore += 1
        round += 1
    }
}

winner()

const gameEnd = () => {
    if (computerScore === 5 && playerScore < 5) {
        console.log('YOU LOST THE MATCH ):')
        round = 0
        computerScore = 0
        playerScore = 0
    } else if (playerScore === 5 && computerScore < 5) {
        console.log('YOU WON THE MATCH!')
        round = 0
        computerScore = 0
        playerScore = 0
    } else if (playerScore === 5 && computerScore === 5) {
        console.log('DRAW!')
        round = 0
        computerScore = 0
        playerScore = 0
    }
}

gameEnd()

// reset button
let resetBtn = document.getElementById('resetBtn').onclick = reset = () => {
    round = 0
    computerScore = 0
    playerScore = 0
}
    
