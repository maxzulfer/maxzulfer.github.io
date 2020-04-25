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
console.log('-------------------------------------')

let round = 1;

let computerScore = 0;
let playerScore = 0;

let playerChoice;
let computerChoice;

let outcome;

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


const playerChoiceGen = (selection) => {
    if (selection === 1) {
        playerChoice = 'rock'
    } else if (selection === 2) {
        playerChoice = 'paper'
    } else {
        playerChoice = 'scissors'
    }
}
playerChoiceGen(1)


// determines winner
const winner = () => {
    if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
        outcome = 'You Win!';
    } else if (playerChoice === 'rock' && computerChoice === 'rock' || playerChoice === 'paper' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'scissors') {
        outcome = 'Tie'
    } else {
        outcome = 'You Lost ):';
    }
}
winner()

const scoring = () => {
    if (outcome === 'You Win!') {
        playerScore++;
        round++;
    } else {
        computerScore++;
        round++;
    }
}
scoring()

// const gameEnd = () => {
//     if (computerScore === 5 && playerScore < 5) {
//         console.log('YOU LOST THE MATCH ):')
//         round = 0
//         computerScore = 0
//         playerScore = 0
//     } else if (playerScore === 5 && computerScore < 5) {
//         console.log('YOU WON THE MATCH!')
//         round = 0
//         computerScore = 0
//         playerScore = 0
//     } else if (playerScore === 5 && computerScore === 5) {
//         console.log('DRAW!')
//         round = 0
//         computerScore = 0
//         playerScore = 0
//     }
// }

// gameEnd()


// reset button

// let reset = document.getElementById('resetBtn');
// reset.addEventListener('click', function resetFunc() {
//     document.getElementById('').innerHTML = 0
//     document.getElementById('').innerHTML = 0
//     document.getElementById('').innerHTML = 1
//     round = 1
//     computerScore = 0
//     playerScore = 0
// })

console.log('Round: ' + round)
console.log('Computer Score: ' + computerScore)
console.log('Player Score: ' + playerScore)
console.log('computer choice: ' + computerChoice)
console.log('player choice: ' + playerChoice)
console.log(outcome)

