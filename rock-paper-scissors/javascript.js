function getComputerChoice() {
    return randomChoice();
}
function randomChoice() {
    let probability = Math.random();
    if (probability <= 0.33) {
        return "rock";
    }
    else if (probability <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }

}
function getHumanChoice() {
    let userInput = prompt("enter you choice : ROCK | Paper | Scissors");
    return userInput;
}

function showSelections(humanSelection, computerSelection) {
    console.log("Human Choice : " + humanSelection);
    console.log("Computer Choice : " + computerSelection);
}
function showScore(humanScore, computerScore) {
    console.log("Human Score : " + humanScore);
    console.log("Computer Score : " + computerScore);
}
function showWinner(humanScore, computerScore) {
    console.log("Final Result : ");
    console.log("---------------");
    if (humanScore === computerScore) {
        console.log("Draw");
    }
    else if (humanScore >= computerScore) {
        console.log("You Win");
    }
    else {
        console.log("Computer Win");
    }

}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let choice = 1; choice <= 5; choice++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        showSelections(humanSelection, computerSelection);
        let currentRound = playRound(humanSelection, computerSelection);

    }
    showScore(humanScore, computerScore);
    showWinner(humanScore, computerScore);

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Draw!" + humanChoice + " is equal to  " + computerChoice);

        }
        else {
            if (humanChoice === "rock") {
                if (computerChoice === "paper") {
                    console.log("You Lose PAPER beats ROCK");
                    computerScore++;
                }
                else {
                    console.log("You win ROCK beats SICSSORS");
                    humanScore++;
                }
            }
            else if (humanChoice === "paper") {
                if (computerChoice === "rock") {
                    console.log("You WIN PAPER beats ROCK");
                    humanScore++;
                }
                else {
                    console.log("You LOSE SICSSORS beats PAPER");
                    computerScore++;
                }
            }
            else {
                if (computerChoice === "rock") {
                    console.log("You LOSE ROCK beats Scissor");
                    computerScore++;
                }
                else {
                    console.log("You Win SICSSORS beats PAPER");
                    humanScore++;
                }
            }
        }
    }

}
playGame()




