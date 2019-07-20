/* 
Scissors = Paper Lizard
Paper = Rock Spock
Rock = Scissors Lizard
Lizard = Spock Paper
Spock = Rock Scissors
*/

//The function runs when you click anywhere on the screen
//document.addEventListener('click' runFunction)

//To contain it into a div need to select the div first using .querySelector etc

//Event parameters are not always necessary 

let userScore = 0
let computerScore = 0

//Start Game
let choices = document.querySelector('.choices')
choices.addEventListener('click', playGame)

//This event listener function runs once you click the choices || This function runs everytime you click choices
function playGame(e) {
    let userChoice = e.target.id
    let compChoice = getCompChoice()

    //Display the restart game button after the game starts
    //CSS style for reset button
    let button = document.querySelector('.restart')
    button.style.display = 'inline-block'
    button.style.marginTop = '50px'
    button.style.padding = '10px'
    button.style.cursor = 'pointer'

    //Gets winner
    let winner = getWinner(userChoice, compChoice)
    console.log(winner)

    //Displays message showing the result
    result(winner, userChoice, compChoice)

    //score tracker
    scoreboard(winner)

}

//Resets the user and computer score to 0
let restart = document.querySelector('.restart')
restart.addEventListener('click', resetGame)

function resetGame() {
    userScore = 0
    computerScore = 0
    tableUser.innerText = userScore
    tableComp.innerText = computerScore

    //Styling
    document.querySelector('.result').style.color = 'blueviolet'
    document.querySelector('.result').innerHTML = '<h1>Make your move</h1>'
    restart.style.display = 'none'
}

//Tracks user and computer score
let tableUser = document.getElementById('user-score')
let tableComp = document.getElementById('comp-score')

function scoreboard(winner) {
    if (winner === 'user') {
        userScore = userScore + 1
        tableUser.innerText = userScore

    } else if (winner === 'computer') {
        computerScore = computerScore + 1
        tableComp.innerText = computerScore
    } 
}

//Displays extra information on winning and loosing condition to the UI
function result(winner, userChoice, compChoice) {
    let resultDiv = document.querySelector('.result')
    resultDiv.style.display = 'inline-block'
    resultDiv.style.marginTop = '50px'

    //User Win Condition
    //Scissors = Paper Lizard
    if (winner === 'user' && userChoice === 'scissors' && compChoice === 'paper') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Scissors cuts ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 
    
    else if (winner === 'user' && userChoice === 'scissors' && compChoice === 'lizard') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Scissors decapitates ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    }

    //Paper = Rock Spock
    else if (winner === 'user' && userChoice === 'paper' && compChoice === 'rock') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Paper covers ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 

    else if (winner === 'user' && userChoice === 'paper' && compChoice === 'spock') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Paper disproves ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 

    //Rock = Scissors Lizard
    else if (winner === 'user' && userChoice === 'rock' && compChoice === 'scissors') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Rock crushes ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 

    else if (winner === 'user' && userChoice === 'rock' && compChoice === 'lizard') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Rock crushes ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 

    //Lizard = Spock Paper
    else if (winner === 'user' && userChoice === 'lizard' && compChoice === 'spock') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Lizard poisons ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 

    else if (winner === 'user' && userChoice === 'lizard' && compChoice === 'paper') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Lizard eats ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 

    //Spock = Rock Scissors
    else if (winner === 'user' && userChoice === 'spock' && compChoice === 'rock') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Spock vaporizes ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 
    
    else if (winner === 'user' && userChoice === 'spock' && compChoice === 'scissors') {
        resultDiv.innerHTML = `
            <h1>You Won!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Spock smashes ${compChoice}</h2>
        `
        resultDiv.style.color = 'green'
    } 

    //User Loss Condition
    //Scissors = Paper Lizard
    else if (winner === 'computer' && compChoice === 'scissors' && userChoice === 'paper') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Scissors cuts ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 
    
    else if (winner === 'computer' && compChoice === 'scissors' && userChoice === 'lizard') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Scissors decapitates ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    }

    //Paper = Rock Spock
    else if (winner === 'computer' && compChoice === 'paper' && userChoice === 'rock') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Paper covers ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 

    else if (winner === 'computer' && compChoice === 'paper' && userChoice === 'spock') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Paper disproves ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 

    //Rock = Scissors Lizard
    else if (winner === 'computer' && compChoice === 'rock' && userChoice === 'scissors') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Rock crushes ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 

    else if (winner === 'computer' && compChoice === 'rock' && userChoice === 'lizard') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Rock crushes ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 

    //Lizard = Spock Paper
    else if (winner === 'computer' && compChoice === 'lizard' && userChoice === 'spock') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Lizard poisons ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 

    else if (winner === 'computer' && compChoice === 'lizard' && userChoice === 'paper') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Lizard eats ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 

    //Spock = Rock Scissors
    else if (winner === 'computer' && compChoice === 'spock' && userChoice === 'rock') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Spock vaporizes ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 
    
    else if (winner === 'computer' && compChoice === 'spock' && userChoice === 'scissors') {
        resultDiv.innerHTML = `
            <h1>You Lost!</h1>
            <h2>You chose ${userChoice}</h2>
            <h2>Computer chose ${compChoice}</h2>
            <h2>Spock smashes ${userChoice}</h2>
        `
        resultDiv.style.color = 'red'
    } 

    //Draw
    else if (winner === 'draw') {
        resultDiv.innerHTML = `
            <h1>Draw! Try Again </h1>
            <h2>You chose ${userChoice} and the computer also chose ${compChoice}</h2>
        `
        resultDiv.style.color = 'blue'
    } 

}

//Determines winner and returns the name of the winner
function getWinner(userChoice, compChoice) {
    // userChoice === getCompChoice() <-- outputs wrong result. idk why
    //logical expressions are evaluated left to right
    //Win Conditions
    if (userChoice === compChoice) {
        return 'draw'
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        return 'user'
    } else if (userChoice === 'scissors' && compChoice === 'lizard') {
        return 'user'
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        return 'user'
    } else if (userChoice === 'paper' && compChoice === 'spock') {
        return 'user'
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        return 'user'
    } else if (userChoice === 'rock' && compChoice === 'lizard') {
        return 'user'
    } else if (userChoice === 'lizard' && compChoice === 'spock') {
        return 'user'
    } else if (userChoice === 'lizard' && compChoice === 'paper') {
        return 'user'
    } else if (userChoice === 'spock' && compChoice === 'rock') {
        return 'user'
    } else if (userChoice === 'spock' && compChoice === 'scissors') {
        return 'user'
    } else {
        return 'computer'
    }
}

//Randomly generates number between and including 0 - 4 and assigns them to the choices
function getCompChoice() {
    let randomNum = Math.floor(Math.random()*5)

    if (randomNum === 0) {
        return 'rock'
    } else if (randomNum === 1) {
        return 'paper'
    } else if (randomNum === 2) {
        return 'scissors'
    } else if (randomNum === 3) {
        return 'lizard'
    } else {
        return 'spock'
    }
}



