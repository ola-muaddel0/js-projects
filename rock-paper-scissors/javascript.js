/* date : 2026-06-15 */

const gameContainer = document.querySelector(".game");

let computerScore = 0;
let humanScore = 0 ;

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => {
    playRound("rock",getComputerChoice() );
});

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
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
