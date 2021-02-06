// Here we are creating variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


// Create variables to store references to the necessary DOM nodes
const playerTurn = document.getElementById("message");

let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");

const player1ScoreBoard = document.getElementById("player1Scoreboard");
const player2ScoreBoard = document.getElementById("player2Scoreboard");

const rollButton = document.getElementById("rollBtn");
const resetButton = document.getElementById("resetBtn");

function showDisplayButton() {
    resetBtn.style.display = "block";
    rollBtn.style.display = "none";
}

/* Hook up a click event listener to the Roll Dice Button. Log out a random
number between 1 and 6. Hint: use Math.floor() and Math.random() */

rollButton.addEventListener("click", function() {
    // if(playerTurn.innerHTML === "Player 1 Turn"){
    //     player1Dice.innerHTML = Math.floor(Math.random() * 6) + 1;
    //     player1ScoreBoard.innerHTML = player1Dice.innerHTML;
    //     playerTurn.innerHTML = 'Player 1 rolled ' + player1Dice.innerHTML;
    //     playerTurn.innerHTML = "Player 2 Turn!" 
    //     switchTurn();
    // } 
    
    // function switchTurn() {
    //     if(playerTurn.innerHTML === "Player 2 Turn!"){
    //         player2Dice.innerHTML = Math.floor(Math.random() * 6) + 1;
    //         player2ScoreBoard.innerHTML = player2Dice.innerHTML;
    //         if(player1ScoreBoard.innerHTML > player2ScoreBoard.innerHTML) {
    //             playerTurn.innerHTML = "Player 1 wins!";
    //         }
    //         if(player2ScoreBoard.innerHTML > player1ScoreBoard.innerHTML) {
    //             playerTurn.innerHTML = "Player 2 wins!";    
    //         } 
    //         else {
    //             playerTurn.innerHTML = "It's a stalemate!";
    //         }    
                
    //     }    
    // }    

    randomNumber = Math.floor(Math.random() * 6) + 1;
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        showDisplayButton()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🎉"
        showDisplayButton()
    }
    
    player1Turn = !player1Turn
})

// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked

resetBtn.addEventListener("click", function(){
    reset()
});

function reset() {
    message.textContent = "Player 1 Turn";
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}



// 1. Find out which players turn it is
// 2. log out the value e.g. "Player 1 rolled 5"
// 3. Switch the turn back to the other player


// Next improvements on tne game app:
// - Make it fair so that every player can start first (roll dice decider maybe/scrabble style who has the higher number)
// - Betting options to treble number if dice throw is either even or odd number so on and so forth
// - Options to lose points ie flying bird etc...
