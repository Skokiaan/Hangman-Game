

var guess = event.key;

document.onkeyup = function(event) {


function setup() {
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["guitar", "bass", "drums", "piano", "trumpet", "harmonica", "tuba", "trombone", "flute", "oboe"];
var guesses = 10;
var messages = {
	win: "You win!",
	lose: "Game over!",
	guessed: "You already used this letter. Try again."
}
};

// Comp chooses word
var wordChoice = words[Math.floor(Math.random() * words.length)];
var emptyLines =[]  // empty array to hold spaces

for(i = 0; i <= wordSelect.length; i++){  // Loop to display lines = # of letters in wordChoice
        emptyLines[i] = ("_")
    }





// var output = document.getElementById("output");










