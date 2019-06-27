function newWord() {
    var currentAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    console.log(currentAnswer)
    console.log(currentAnswer.length)

    currentAnswerDisplayed.textContent = currentAnswer.length
    // how do I make this a string of underscores? Do I use .toString()?

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
       console.log(userGuess)

        // maybe change this to an array with all the letters?
        // maybe have prior if statement about whether or not the userGuess is in the alreadyGuessed array, add them to the alreadyguessed array if no, and display array in string form?
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")
            && (alreadyGuessed.includes(userGuess) === false)) {
            if (currentAnswer.includes(userGuess)) {
                console.log("yes");
                // somehow replace a corresponding underscore with userGuess

                // if (missing answers === 0) {
                    // wins++;
                    // winsText.textContent = wins;
                //     newWord()
                // }

            } else {
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
