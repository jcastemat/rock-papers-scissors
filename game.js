function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return choices[idx];
}

function getHumanChoice() {
  return prompt("Choose: rock, paper, or scissors?").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const comp = computerChoice;
    let message;

    if (human === comp) {
      message = `Tie! You both chose ${human}`;
    } else if (
      (human === "rock"     && comp === "scissors") ||
      (human === "paper"    && comp === "rock")     ||
      (human === "scissors" && comp === "paper")
    ) {
      humanScore++;
      message = `You win! ${human} beats ${comp}`;
    } else {
      computerScore++;
      message = `You lose! ${comp} beats ${human}`;
    }

    console.log(message);
    console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(`🎉 Game over—you win ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`😢 Game over—you lose ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`🤝 Game over—it’s a tie ${humanScore} to ${computerScore}.`);
  }
}

playGame();
