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
    else {
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
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("computerSelection : " + computerSelection);
console.log("humanSelection : " + humanSelection);
console.log("The Result : " + playRound(humanSelection, computerSelection));


