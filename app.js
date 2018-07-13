var computerChoices = ['rock', 'paper', 'scissors']
var resultElement = document.getElementById("gameResult")
function play(choice) {
    var thisNumber = Math.floor(Math.random() * 3)
    var thisChoice = computerChoices[thisNumber]
    var gameResult = ''
    switch (choice) {
        case 'rock':
            if (thisChoice = 'rock') {
                gameResult = 'Draw'
            } else if (thisChoice = 'paper') {
                gameResult = 'Lose'
            } else {
                gameResult = 'Win'
            }
            break
        case 'paper':
            if (thisChoice = 'rock') {
                gameResult = 'Win'
            } else if (thisChoice = 'paper') {
                gameResult = 'Draw'
            } else {
                gameResult = 'Lose'
            }
            break
        case 'scissors':
            if (thisChoice = 'rock') {
                gameResult = 'Lose'
            } else if (thisChoice = 'paper') {
                gameResult = 'Win'
            } else {
                gameResult = 'Draw'
            }
            break
    }
     resultElement.innerText = gameResult
}