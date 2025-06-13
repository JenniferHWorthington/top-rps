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

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("Tie!!");
      } else if (computerChoice === "paper") {
        computerScore++;
        console.log("You lose!! Paper beats rock!");        
      } else if (computerChoice === "scissors") {
        humanScore++;
        console.log("You win!! Rock beats scissors");
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        humanScore++;
        console.log("You win!! Paper beats rock!");
      } else if (computerChoice === "paper") {
        console.log("Tie!!");
      } else if (computerChoice === "scissors") {
        computerScore++;
        console.log("You lose!! Scissors beats paper!");
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        computerScore++;
        console.log("You lose!! Rock beats scissors!");
      } else if (computerChoice === "paper") {
        humanScore++;
        console.log("You win!! scissors beats paper!");
      } else if (computerChoice === "scissors") {
        console.log("Tie!!");
      }
    } else {
      return "error";
    }
  }

  for (let gameCount = 0; gameCount < 5; gameCount++) {
    playRound(getHumanChoice(), getComputerChoice());
  } 

  if (humanScore > computerScore) {
    console.log("You win!!!");
  } else {
    console.log("You lose!!!");
  }

}

playGame();