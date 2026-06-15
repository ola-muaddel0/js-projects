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


