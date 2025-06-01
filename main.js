
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

function getHumanChoice(){
    let humanChoice = prompt("Please choose, Rock, Paper, or Scissors: ").toUpperCase();

    while ( humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS"){
      humanChoice = prompt("Invalid Choice, please choose Rock, Paper or Scissors!").toUpperCase();
    }
    return humanChoice;
}

function playGame(){
  
  let humanScore = 0;
  let computerScore = 0;

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

  for (let i = 0; i < 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }
}

  




playGame();


