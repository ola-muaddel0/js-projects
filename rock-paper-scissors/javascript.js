/* date : 2026-06-15 */

const gameContainer = document.querySelector(".game");
const resultContainer = document.querySelector(".game-result");

let roundTimes = 0;
let computerScore = 0;
let humanScore = 0;
const MAX_PLAYING_TIMES = 5;
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    roundTimes++;
    checkGameEnding();
});

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    roundTimes++;
    checkGameEnding();
});

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    roundTimes++;
    checkGameEnding();
});

gameContainer.appendChild(rockButton);
gameContainer.appendChild(paperButton);
gameContainer.appendChild(scissorsButton);



/* (1) we can use console.log(probability) to check the 
 probability and see if the result of console.log(getComputerChoice())
 match the choice we put based on that probability */
function getComputerChoice() {
    let probability = Math.random();
    let choice;
    if (probability <= 0.33) {
        choice = "rock";
    }
    else if (probability <= 0.66) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;

}


/* (2) play round 
it will return value between (-1 , 0 , 1)
if the computer win : -1
if the user win : 1 ;
if it is draw : 0 */
function playRound(humanChoice, computerChoice) {
    showSelection(humanChoice, computerChoice);
    if (humanChoice === computerChoice) {
        return 0;
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return -1;
        }
        else {
            humanScore++;
            return 1;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return 1;
        }
        else {
            computerScore++
            return -1;
        }
    }
    else {
        if (computerChoice === "rock") {
            computerScore++;
            return -1;
        }
        else {
            humanScore++;
            return 1;
        }
    }
}
/*(3) */
function showSelection(humanChoice, computerChoice) {
    const humanChoiceText = document.createElement("p");
    const computerChoiceText = document.createElement("p");

    humanChoiceText.textContent = "Human Choice : " + humanChoice;
    computerChoiceText.textContent = "Computer Choice : " + computerChoice;

    gameContainer.appendChild(humanChoiceText);
    gameContainer.appendChild(computerChoiceText);

}
/*(4)  */
function checkGameEnding() {
    if (roundTimes == MAX_PLAYING_TIMES) {
        showFinalresult();
        return true;
    }
    return false;
}
/*(5) This function will output the final result */
function showFinalresult() {
    const humanScoreText = document.createElement("p");
    const computerScoreText = document.createElement("p");
    const finalResult = document.createElement("p");
    let result = "";
    if (computerScore === humanScore) {
        result = "Draw";
    }
    else if (computerScore > humanScore) {
        result = "You lose";
    }
    else {
        result = "You Win";
    }
    humanScoreText.textContent = "Human Score : " + humanScore;
    computerScoreText.textContent = "Computer Score : " + computerScore;
    finalResult.textContent = result;

    resultContainer.appendChild(humanScoreText);
    resultContainer.appendChild(computerScoreText);
    resultContainer.appendChild(finalResult);

}