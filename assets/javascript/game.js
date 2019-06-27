var wins = 0
var guesses = 12
var possibleAnswers = ["aragorn", "frodo", "peregrin", "meriadoc", "samwise", "legolas", "gimli", "gandalf", "boromir"]
var winsText = document.getElementById("wins")
var currentAnswerDisplayed = document.getElementById("answer")
var remainingGuesses = document.getElementById("guesses-left")
var alreadyGuessedSpan = document.getElementById("already-guessed")
var alreadyGuessed = []
var answerArray = []


function newWord() {

    alreadyGuessed = []
    alreadyGuessedSpan.textContent = "none"
    guesses = 12
    remainingGuesses.textContent = 12;

    var currentAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    console.log(currentAnswer)
    console.log(currentAnswer.length)
    answerArray.push(currentAnswer)
    console.log(answerArray)
    currentAnswerDisplayed.textContent = currentAnswer.length
    // how do I make this a string of underscores? Do I use .toString()?

        document.onkeyup = function(event) {
            var userGuess = event.key.toLowerCase();
           console.log(userGuess)

            if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
                if (currentAnswer.includes(userGuess)) {
                    console.log("yes");
                    // somehow replace a corresponding underscore with userGuess

                    // if (missing answers === 0) {
                        // wins++;
                        // winsText.textContent = wins;
                    //     newWord()
                    // }
                    
                } else {
                    if (alreadyGuessed.includes(userGuess) === false) {
                    console.log("no");
                    guesses--;
                    console.log(guesses);
                    remainingGuesses.textContent = guesses;
                    alreadyGuessed.push(userGuess)
                    alreadyGuessedSpan.textContent = alreadyGuessed
                    console.log(alreadyGuessed)
                    if (guesses === 0) {
                        newWord()
                    }
                }
                
            
                }
                }
                }
            }

newWord();