var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessArray = [];

// computer picks random letter and stores in a variable 
// var randomLetter = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesSoFar = document.getElementById("guessessofar-text");


// function to run when key is pressed 
document.onkeyup = function(event) {
    
    // computer picks random letter and stores in a variable 
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    
    // variable to store user input and set to to lower case 
    var userGuess = event.key.toLowerCase();
    // variable to check if user input is in letters array 
    var letterIndex = letters.indexOf(userGuess);


    // if the user input is a letter in the array, run this code 
    if (letterIndex > -1) {

        // computer picks random letter and stores in a variable 
        // var randomLetter = letters[Math.floor(Math.random() * letters.length)];

        if (userGuess === randomLetter) {
            wins++;
            guessesLeft = 9;
            guessArray = [];
            // var randomLetter = letters[Math.floor(Math.random() * letters.length)];
            alert("You win!");
        }

        else {
            guessesLeft--;
            guessArray.push(userGuess);
        }

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessArray = [];
            // var randomLetter = letters[Math.floor(Math.random() * letters.length)];
            alert("You lose :(");
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFar.textContent = "Your Guesses So Far: " + guessArray;
    }

};