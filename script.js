let humanScore = 0;
let computerScore = 0;
let round = 0;


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
            break;
        default:
            console.log(`${computerSelection} beats ${humanSelection}`);
            console.log("You lose!");
            break;
    }
}

playRound(humanSelection, computerSelection);