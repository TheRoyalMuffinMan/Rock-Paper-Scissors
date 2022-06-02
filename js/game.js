const CHOICES = 3, SCORE_TO_WIN = 5;
const actions = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];
const btns = document.querySelectorAll("button");
const winner = document.querySelector("#winner");
const userScore = document.querySelector(".player-score");
const robotScore = document.querySelector(".computer-score");
let playerScore = computerScore = 0;

function computer() {
    return actions[Math.floor(Math.random() * CHOICES)][0];
}

function round(playerSelection, computerSelection) {
    for (let i = 0; i < CHOICES; i++) {
        if (actions[i][0] == playerSelection && actions[i][1] == computerSelection) {
            // console.log(`You Win! ${playerSelection} beats ${computerSelection}`); debugging
            return true;
        }
    }
    // console.log(`You Lose! ${computerSelection} beats ${playerSelection}`); debugging
    return false;
}

function updateScore() {
    userScore.textContent = `Player: ${playerScore}`;
    robotScore.textContent = `Computer: ${computerScore}`;
}

function play(selection) {
    let playerSelection = selection;
    let computerSelection = computer();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        // console.log(`You Tied! ${playerSelection} is the same ${computerSelection}`); debugging
        winner.textContent = `You Tied! ${playerSelection} is the same ${computerSelection}`;
    } else if (round(playerSelection, computerSelection)) {
        winner.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        winner.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    if (playerScore >= SCORE_TO_WIN || computerScore >= SCORE_TO_WIN) {
        console.log((playerScore > computerScore) ? "Player Won!" : "Computer Won!");
        winner.textContent = (playerScore > computerScore) ? "Player Won!" : "Computer Won!";
        btns.forEach(btn => {
            if (btn["id"] != "reset") {
                btn.disabled = true;
            }
        });
    }
}

function reset() {
    playerScore = computerScore = 0;
    winner.textContent = "First to get to 5, wins!"
    btns.forEach(btn => {
        btn.disabled = false;
    });
}

function game() {
    btns.forEach(btn => {
        btn.addEventListener("click", _ => {
            if (btn["id"] == "reset") {
                reset();
            } else {
                play(btn["value"]);
            }
            updateScore();
        })
    })
}

game();

