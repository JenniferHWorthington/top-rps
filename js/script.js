function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  } else {
    return "error";
  }
  
}

function getHumanChoice() {
  let humanChoice = window.prompt("rock, paper, or scissors?");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice());
console.log(getComputerChoice());