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