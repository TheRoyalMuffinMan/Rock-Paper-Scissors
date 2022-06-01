const ROUNDS = 5;
const CHOICES = 3;
const actions = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];

function computer() {
    return actions[Math.floor(Math.random() * CHOICES)][0];
}

function round(playerSelection, computerSelection) {
    for (let i = 0; i < CHOICES; i++) {
        if (actions[i][0] == playerSelection && actions[i][1] == computerSelection) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return true;
        }
    }
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return false;
}

function game() {
    let playerScore = computerScore = 0;
    for (let r = 0; r < ROUNDS; r++) {
        let playerSelection = prompt("Enter one from these three choices:\
                                      -Rock\n-Paper\n-Scissors\n");
        let computerSelection = computer();
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection == computerSelection) {
            console.log(`You Tied! ${playerSelection} are the same ${computerSelection}`);
            r--; continue;
        } else if (round(playerSelection, computerSelection)) {
            playerScore++;
        } else {
            computerScore++;
        }

    }
    console.log((playerScore > computerScore) ? "Player Won!" : "Computer Won!");
}

game();