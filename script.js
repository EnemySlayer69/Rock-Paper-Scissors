let humanScore = 0, //Initializing human and computer scores to zero
  computerScore = 0;
function getComputerChoice() {
  //Function returns random choice from "Rock", "Paper" or "Scissors".
  // let choices = ["Rock", "Paper", "Scissors"]; using arrays
  let randomNumber = Math.floor(Math.random() * 3);
  // return choices[randomNumber];

  return randomNumber == 0 ? "Rock" : randomNumber == 1 ? "Paper" : "Scissors";
}

function getHumanChoice() {
  //Function to get user's input choice
  let userChoice = prompt("Rock, Paper or Scissors?");
  return userChoice;
}

function playGame() {
  //Actual game
  function playRound(computerChoice, humanChoice) {
    //Each round of the game
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    humanChoice == "Scissors" && computerChoice == "Rock"
      ? computerScore++
      : humanChoice == "Rock" && computerChoice == "Scissors"
      ? humanScore++
      : humanChoice == "Paper" && computerChoice == "Rock"
      ? humanScore++
      : humanChoice == "Rock" && computerChoice == "Paper"
      ? computerScore++
      : humanChoice == "Scissors" && computerChoice == "Paper"
      ? humanScore++
      : humanChoice == "Paper" && computerChoice == "Scissors"
      ? computerScore++
      : "Tie!";
    if (humanScore++ == true)
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    else console.log(`You loose! ${computerChoice} beats ${humanChoice}.`);
  }

  for (let i = 0; i < 5; i++) {
    //Calling the playRound function 5 times
    playRound();
  }
}

playGame(); //Calling the playGame function
