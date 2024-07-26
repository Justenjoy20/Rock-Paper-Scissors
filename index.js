

//Get computer's choice and return it
function getComputerChoice() { const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length); return choices[randomIndex]; }

//Prompt and return human choice

function getHumanChoice () {const choice = prompt("Enter rock , paper, or scissors").toLowerCase();
   return choice;
}; 
//
let humanScore = 0;
let computerScore = 0; 
/*Logic for round */
/* < > nu merg cu string dar doar cu numere */
function playRound(humanChoice, computerChoice ) {
console.log(`Human choice: ${humanChoice}, Computer choice: ${computerChoice}`)
    if (humanChoice ===  computerChoice )  {
      console.log("Draw"); console.log("Human score:",++humanScore,"Computer score:",++computerScore)}
       else if (humanChoice === "rock" && computerChoice === "paper" )
      {console.log("Computer wins"); console.log("Computer score:",++computerScore);}
    else if (humanChoice === "rock" && computerChoice === "scissors")
   {console.log("You win"); console.log("Human score:",++humanScore);}
    else if (humanChoice === "paper" && computerChoice === "scissors")
      {console.log("Computer wins"); console.log("Computer score:",++computerScore);}
    else if (humanChoice === "paper" && computerChoice === "rock")
      {console.log("You win"); console.log("Human score:",++humanScore);}
    else if (humanChoice === "scissors" && computerChoice === "rock")
      {console.log("Computer wins"); console.log("Computer score:",++computerScore);}
    else if (humanChoice === "scissors" && computerChoice === "paper")
      {console.log("You win"); console.log("Human score:",++humanScore);}
    
  }
  
  /*Cum se calculeaza humanChoice si computerChoice ? 
  pe baza functiilor getHumanChose si getComputerChoice,
  rezultatul la humanChoice si comp este indicat de return, 
  fara return functia nu va returna nici o valoare care poate sa fie folosita in alte functii*/  
  
/* Loop the rounds*/
 function endscore()   {if (humanScore > computerScore) {console.log(`Human domination with ${humanScore} points`);}
 else  {console.log(`Computer beats Human with ${computerScore} points`);}}

  function playGame () {
  let count = 0;
  while (count < 5) { const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);count++;};  
    endscore(); 
    return "Game over"                               
    }
    console.log(playGame());
                                                                                                       