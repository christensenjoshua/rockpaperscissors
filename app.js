var computerChoices = ['rock', 'paper', 'scissors']
var resultElement = document.getElementById("gameResult")
var playerScore = 0
var computerScore = 0
var playerScoreElement = document.getElementById("playerScore")
var computerScoreElement = document.getElementById("computerScore")
var gameResult = ''
function play(choice) {
    var thisNumber = Math.floor(Math.random() * Math.floor(3))
    var thisChoice = computerChoices[thisNumber]
    switch (choice) {
        case 'rock':
            if (thisChoice == 'rock') {
                gameResult = 'Draw'
            } else if (thisChoice == 'paper') {
                gameResult = 'Lose'
            } else {
                gameResult = 'Win'
            }
            break;
        case 'paper':
            if (thisChoice == 'rock') {
                gameResult = 'Win'
            } else if (thisChoice == 'paper') {
                gameResult = 'Draw'
            } else {
                gameResult = 'Lose'
            }
            break;
        case 'scissors':
            if (thisChoice == 'rock') {
                gameResult = 'Lose'
            } else if (thisChoice == 'paper') {
                gameResult = 'Win'
            } else {
                gameResult = 'Draw'
            }
            break;
    }
    switch(gameResult){
        case 'Win':
            playerScore++
            break;
        case 'Lose':
            computerScore++
            break;
        case 'Draw':
            playerScore++
            computerScore++
            break;
    }
    updateScreen()
}
function playAgain(){
    playerScore = 0
    computerScore = 0
    gameResult = ''
    updateScreen()
}
function updateScreen(){
    playerScoreElement.innerText = playerScore
    computerScoreElement.innerText = computerScore
    resultElement.innerText = gameResult
    
}