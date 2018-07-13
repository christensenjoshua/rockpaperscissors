var computerChoices = ['rock', 'paper', 'scissors']
var resultElement = document.getElementById("gameResult")
var playerScore = 0; var playerWins = 0
var computerScore = 0; var computerWins = 0
var playerScoreElement = document.getElementById("playerScore"); var playerWinsElement = document.getElementById("playerWins")
var computerScoreElement = document.getElementById("computerScore"); var computerWinsElement = document.getElementById("computerWins")
var gameResult = ''
var clear = false
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
function playAgain(clear){
    if(clear){
        playerWins = 0
        computerWins = 0
    }
    playerScore = 0
    computerScore = 0
    gameResult = ''
    updateScreen()
}
function updateScreen(){
    playerScoreElement.innerText = playerScore
    computerScoreElement.innerText = computerScore
    playerWinsElement.innerText = playerWins
    computerWinsElement.innerText = computerWins
    resultElement.innerText = gameResult
        if(playerScore >= 10){
            if(computerScore == playerScore){
                alert("Congratulations! You both win!! (kindof)")
                playerWins++
                computerWins++
                playAgain()
            }else{
                alert("Congratulations, you win!!!")
                playerWins++
                playAgain()
            }
        }else if(computerScore >= 10){
            alert("Sorry, your opponent bested you!")
            computerWins ++
            playAgain()
        }
    }