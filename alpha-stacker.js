var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
    var consoleString = "";
    for (var i = 0; i < theAlphabetArray.length; i++) {
    	if ( i % 3 === 0 ) {
    		consoleString = consoleString + " " + theAlphabetArray[i];
    	} else {
    		consoleString = consoleString + theAlphabetArray[i];
    	}
    	console.log(consoleString);
    }
}

// Invoke the function and pass in the array
stackLetters(alphabet);