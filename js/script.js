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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      return "Tie!!";
    } else if (computerChoice === "paper") {
      return "You lose!! Paper beats rock!";
    } else if (computerChoice === "scissors") {
      return "You win!! Rock beats scissors";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!! Paper beats rock!";
    } else if (computerChoice === "paper") {
      return "Tie!!";
    } else if (computerChoice === "scissors") {
      return "You lose!! Scissors beats paper!";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lose!! Rock beats scissors!";
    } else if (computerChoice === "paper") {
      return "You win!! scissors beats paper!";
    } else if (computerChoice === "scissors") {
      return "Tie!!";
    }
  } else {
    return "error";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));