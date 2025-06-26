
const compScoreDisp = document.querySelector("#compScore");
const humanScoreDisp = document.querySelector("#hmnScore");
const result = document.querySelector("#resultDisp");

function getComputerChoice(){
    let computerChoice = '';
    const randNum = Math.floor(Math.random() * 3 ) + 1;
    if (randNum === 1) {
        computerChoice = "ROCK";
    } else if (randNum === 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
  
  humanSelection = humanSelection.toUpperCase();
  let outcome = humanSelection + "-" + computerSelection;
  let congrats = "Congrats! The computer chose " + computerSelection + "! You win!";
  let badLuck = "The computer chose " + computerSelection + "! You lose.";

  if (humanSelection === computerSelection) {
    console.log("It's a draw, you both chose " + humanSelection);
    result.textContent = "It's a draw";
  } else {
    switch (outcome) {
      case "ROCK-SCISSORS":
        result.textContent = congrats;
        humanScore += 1;
        break;
      case "PAPER-ROCK":
        result.textContent = congrats;
        humanScore += 1;
        break;
      case "SCISSORS-PAPER":
        result.textContent = congrats;
        humanScore += 1;
        break;
      default:
        result.textContent = badLuck;
        computerScore += 1;
      }
    } 

  humanScoreDisp.textContent = humanScore;
  compScoreDisp.textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      alert("🎉 You win the game!");
    } else {
      alert("💻 The computer wins the game");
    }

    humanScore = 0;
    computerScore = 0;
    humanScoreDisp.textContent = humanScore;
    compScoreDisp.textContent = computerScore;
    result.textContent = "New Game, make your move."
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("rock",getComputerChoice())
});

paper.addEventListener("click", () => {
  playRound("paper",getComputerChoice())
});

scissors.addEventListener("click", () => {
  playRound("scissors",getComputerChoice())
});



  







