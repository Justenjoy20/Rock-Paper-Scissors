//Random choice of the computer
function getComputerChoice() { const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random()*choices.length); return choices[randomIndex]; }
 
  
//variables for score
 let humanScore = 0;
let computerScore = 0; 
 //Disable buttons
 const buttons = document.querySelectorAll(`button`)
 function disableButtons() {
     buttons.forEach(elem => {
         elem.disabled = true
     })}
/*Logic for round */
function playRound(humanChoice, computerChoice ) {
 
  let resultText = ``
  let choice1 = `Human choice: ${humanChoice}, Computer choice: ${computerChoice}`
 
  let humanoidscore = (`Human score: ${++humanScore}, Human wins!`)
  let computeroidscore = (`Computer score: ${++computerScore}, Computer wins!`);
  document.getElementById(`choice1`).innerHTML = choice1
      if (humanChoice ===  computerChoice )  {
          document.getElementById(`scoreboard`).innerHTML = `Draw`}
         else if (humanChoice === "rock" && computerChoice === "paper" )
        {  document.getElementById(`scoreboard`).innerHTML = computeroidscore}
      else if (humanChoice === "rock" && computerChoice === "scissors")
     {  document.getElementById(`scoreboard`).innerHTML = humanoidscore;}
      else if (humanChoice === "paper" && computerChoice === "scissors")
        { document.getElementById(`scoreboard`).innerHTML = computeroidscore}
      else if (humanChoice === "paper" && computerChoice === "rock")
        {   document.getElementById(`scoreboard`).innerHTML = humanoidscore}
      else if (humanChoice === "scissors" && computerChoice === "rock")
        {  document.getElementById(`scoreboard`).innerHTML = computeroidscore}
      else if (humanChoice === "scissors" && computerChoice === "paper")
        {   document.getElementById(`scoreboard`).innerHTML = humanoidscore}
      if (humanScore === 5 || computerScore === 5) {
        document.getElementById('result').innerHTML = "<br>Game over"
        disableButtons();
        return; // Stop further processing
    }
  }
           
    
  //selecting a div for the buttons
const div = document.querySelector("#container")

// selecting id for the buttons
const butt1 = document.querySelector(`#click1`);
const butt2 = document.querySelector(`#click2`);
const butt3 = document.querySelector(`#click3`);
//Add text content
butt1.textContent = "Rock";
butt2.textContent = "Paper";
butt3.textContent = "Scissors";
 // On click trigger the human and computer choice
 
 butt1.addEventListener('click', () => playRound("rock", getComputerChoice()));
 butt2.addEventListener('click', () => playRound("paper", getComputerChoice()));
 butt3.addEventListener('click', () => playRound("scissors", getComputerChoice()));

// function to display endscore
const finalscore = document.querySelector("#finalscore");
function endScore() {
  

  if (humanScore > computerScore) {
    finalscore.innerText = `Human domination with ${humanScore} points`;
  } else {
    finalscore.innerText = `Computer beats Human with ${computerScore} points`;
  }

}
 



