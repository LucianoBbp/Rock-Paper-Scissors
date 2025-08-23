let humanScore = 0;
let computerScore = 0;
let round = 0;


function countRounds() {
    round += 1;
    return round;
}

function getComputerChoice() {
   const options = ["Rock", "Paper", "Scissors"];
   const computerSelection = options[Math.floor(Math.random()* 3)];
   return computerSelection;
}

function getHumanChoice() {
    const humanSelection = prompt("Your turn", "Paper");
    return humanSelection;
}


function playRound(humanSelection, computerSelection) {
    switch (true) {
        case (humanSelection === computerSelection):
            console.log("It's a tie");
            break;
        case (humanSelection === "Rock" && computerSelection === "Scissors"):
        case (humanSelection === "Paper" && computerSelection === "Rock"):
        case (humanSelection === "Scissors" && computerSelection === "Paper"):
            console.log(`${humanSelection} beats ${computerSelection}`);
            console.log("You win!");
            humanScore += 1;
            break;
        default:
            console.log(`${computerSelection} beats ${humanSelection}`);
            console.log("You lose!");
            computerScore += 1;
            break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
    countRounds();
    console.log(`Round ${round}`);
    playRound(getHumanChoice(), getComputerChoice());    
    }
    console.log(`Player score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}
playGame();