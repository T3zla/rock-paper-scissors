function getComputerChoice(){
    let computerChoice = '';
    const randNum = Math.floor(Math.random() * 3 ) + 1;
    if (randNum === 1) {
        computerChoice = "rock";
    } else if (randNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

console.log(getComputerChoice());