// array to store all possible letter choices 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// empty array to store letters already guessed 
var guessArray = [];

// computer picks random letter at the start and stores in a variable 
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// starting values for wins, losses, and remaining guesses 
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// variables to hold references to html elements that will change 
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesSoFar = document.getElementById("guessessofar-text");


// function to run when key is pressed 
document.onkeyup = function(event) {
    
    // variable to store user input and set to to lower case 
    var userGuess = event.key.toLowerCase();
    // variable to check if user input is in letters array 
    var letterIndex = letters.indexOf(userGuess);


    // if the user input is a letter in the array, run this code 
    if (letterIndex > -1) {

        if (userGuess === randomLetter) {
            alert("You win! I was thinking of the letter " + randomLetter + "!");
            wins++;
            // these variables reset to their original values. computer picks new random letter
            guessesLeft = 9;
            guessArray = [];
            randomLetter = letters[Math.floor(Math.random() * letters.length)];

        }

        else {
            guessesLeft--;
            // adds userGuess to guessArray variable 
            guessArray.push(userGuess);
        }

        if (guessesLeft === 0) {
            alert("You lose. I was thinking of the letter " + randomLetter + " :(");
            losses++;
            // these variables reset to their original values. computer picks new random letter
            guessesLeft = 9;
            guessArray = [];
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
        }

        // display the letters already guessed and the wins, losses, and guesses left totals 
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFar.textContent = "Your Guesses So Far: " + guessArray + " ";
    }

};