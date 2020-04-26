//random number generator
// comparison function
// player input
// connect to DOM

let playerChoice = 2;

// ranodm number function
const randomNumGen = () => {
    let num = Math.floor(Math.random() * 10);
    return num
}
let randomNumber = randomNumGen()

console.log(playerChoice)
// compare fucntion
const compareFunc = () => {
    if (playerChoice > randomNumber) {
        console.log('High')
    } else if (playerChoice < randomNumber) {
        console.log('Low')
    } else {
        console.log('You guessed the correct number!!')
        document.getElementsByClassName('container').style = 'backgroundColor: blue'
    }
}
compareFunc()
