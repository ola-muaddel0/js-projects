/* date : 2026-06-15 */

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

/*(2) this function will get user input using prompt 
and return the user input in lower case I can check it
with console.log(getComputerChoice()) */
function getHumanChoice() {
    let userInput = prompt("enter you choice : ROCK | Paper | Scissors");
    return userInput.toLowerCase();
}
/* (3) play round 
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
            return -1;
        }
        else {
            return 1;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            return 1;
        }
        else {
            return -1;
        }
    }
    else {
        if (computerChoice === "rock") {
            return -1;
        }
        else {
            return 1;
        }
    }
}
/*(5) This function will output the final result */
function showFinalresult(computerScore, humanScore) {
    console.log("computerScore : " + computerScore);
    console.log("humanScore : " + humanScore);
    if (computerScore === humanScore) {
        console.log("Draw");
    }
    else if (computerScore >  humanScore) {
        console.log("You lose");
    }
    else {
        console.log("You Win");
    }
}

/*(4) playGame this will play five round 
of rock paper scissors */

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const oneRoundResult = playRound(humanSelection, computerSelection);
        console.log("Round " + i + " : ");
        console.log("computerSelection : " + computerSelection);
        console.log("humanSelection : " + humanSelection);
        console.log("----------------------");

        if  (oneRoundResult === 1) {
            humanScore++;
        }
        if (oneRoundResult === -1){
            computerScore++;
        }
       
    }
     showFinalresult(computerScore, humanScore);
}
playGame();








