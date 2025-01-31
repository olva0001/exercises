"use strict";

// Define elements
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const buttons = document.querySelectorAll('#buttons button');
const texts = document.getElementById('texts');
const winText = document.getElementById('win');
const loseText = document.getElementById('lose');
const drawText = document.getElementById('draw');

// Options for the game
const choices = ['rock', 'paper', 'scissors'];

// Add click event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Hide result text when the button is clicked (start a new round)
      hideResultText();
  
      const playerChoice = button.classList[0]; // get the class (rock, paper, or scissors)
      playGame(playerChoice);
    });
  });
  
  // Function to hide any result text (win, lose, draw)
  function hideResultText() {
    winText.classList.add('hidden');
    loseText.classList.add('hidden');
    drawText.classList.add('hidden');
  }


// Function to play the game
function playGame(playerChoice) {
  // Disable the buttons while the game is playing
  document.getElementById('buttons').classList.add('disabled');
  
  // Computer randomly selects a choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update players' selections (change their class to reflect the choice)
  updatePlayerChoice(player1, playerChoice);
  updatePlayerChoice(player2, computerChoice);

  // Apply shake animation
  player1.classList.add('shake');
  player2.classList.add('shake');

  // Determine winner after delay
  setTimeout(() => {
    const result = determineWinner(playerChoice, computerChoice);
    showResult(result);
    
    // Remove shake class after animation ends
    player1.classList.remove('shake');
    player2.classList.remove('shake');
  }, 1800); // Delay to allow shake animation to finish
}

// Function to update the player's hand based on their choice
function updatePlayerChoice(playerElement, choice) {
  playerElement.className = 'player ' + choice; // This will update the background image based on the choice
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  }
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

// Function to display the result
function showResult(result) {
  // Hide all texts first
  winText.classList.add('hidden');
  loseText.classList.add('hidden');
  drawText.classList.add('hidden');
  
  // Show the appropriate result
  if (result === 'win') {
    winText.classList.remove('hidden');
  } else if (result === 'lose') {
    loseText.classList.remove('hidden');
  } else {
    drawText.classList.remove('hidden');
  }
  
  // Enable buttons again
  document.getElementById('buttons').classList.remove('disabled');
}

