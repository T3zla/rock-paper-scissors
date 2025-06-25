
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

function playRound(humanSelection, computerSelection){

  console.log(computerSelection);
  humanSelection = humanSelection.toUpperCase();

  let outcome = humanSelection + "-" + computerSelection;
  let congrats = "Congrats! The computer chose " + computerSelection + "! You win!";
  let badLuck = "The computer chose " + computerSelection + "! You lose.";

  if (humanSelection === computerSelection) {
    console.log("It's a draw, you both chose " + humanSelection);
  } else {
    switch (outcome) {
      case "ROCK-SCISSORS":
        console.log(congrats);
        humanScore += 1;
        break;
      case "PAPER-ROCK":
        console.log(congrats);
        humanScore += 1;
        break;
      case "SCISSORS-PAPER":
        console.log(congrats);
        humanScore += 1;
        break;
      default:
        console.log(badLuck);
        computerScore += 1;
      }
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
  







