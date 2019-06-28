var wins = 0
var guesses = 12
var possibleAnswers = ["aragorn", "frodo", "peregrin", "meriadoc", "samwise", "legolas", "gimli", "gandalf", "boromir", "galadriel", "gollum", "arwen", "faramir", "elrond", "saruman", "sauron", "bilbo", "eowyn", "eomer", "theoden", "treebeard",]
var winsText = document.getElementById("wins")
var currentAnswerDisplayed = document.getElementById("answer")
var remainingGuesses = document.getElementById("guesses-left")
var alreadyGuessedSpan = document.getElementById("already-guessed")
var alreadyGuessed = []
var answerArrayHidden = []

function newWord() {

    alreadyGuessed = []
    alreadyGuessedSpan.textContent = "none"
    guesses = 12
    remainingGuesses.textContent = 12;
    answerArrayHidden = []

    var currentAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    console.log(currentAnswer)
    console.log(currentAnswer.length)

    for (i = 0; i < currentAnswer.length; i++) {
        answerArrayHidden.push("_")
    }
    console.log(answerArrayHidden)
    currentAnswerDisplayed.textContent = answerArrayHidden

        document.onkeyup = function(event) {
            var userGuess = event.key.toLowerCase();
           console.log(userGuess)
            
            function correctGuess() {
            var str = answerArrayHidden.toString();
            var res = str.split(" ");
            document.getElementById("answer").innerHTML = res
            answerArrayHidden[j] = userGuess;            
            }
        
            if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
                if (currentAnswer.includes(userGuess)) {
                    console.log("yes");

                    for (j = 0; j < currentAnswer.length; j++) {
                        if (currentAnswer[j] === userGuess) {
                            console.log(j)
                            correctGuess()
                            currentAnswerDisplayed.textContent = answerArrayHidden
                        }
                    }
                        if (answerArrayHidden.includes("_") === false) {
                            wins++;
                            winsText.textContent = wins;
                            var audio = new Audio("assets/images/sound_win.mp3");
                            audio.play();
                            newWord()
                        }
                    
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
                        var audio = new Audio("assets/images/sound_loss.wav");
                        audio.play();
                        newWord()
                    }
                    }
                
                }
            }
        }
}
newWord();