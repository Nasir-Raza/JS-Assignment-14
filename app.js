var scoreMatched = 0, scoreMismatched = 0;
var wordsList = [];
var isAlreadyExists = false; 

let dictionary = [
    "cat",
    "karachi",
    "computer",
    "lion",
    "mouse",
    "keyboard",
    "display",
    "pakistan",
    "tiger",
    "town",
    "sun",
    "moon",
    "wolf",
    "lahore",
    "usa",
    "china",
    "hyderabad",
    "islamabad",
    "hockey",
    "football",
    "cow",
    "candle",
    "ali",
    "raza",
    "nasir",
    "sara",
    "alice",
    "google",
    "microsoft",
    "windows",
    "door",
    "linux",
    "ubuntu",
    "zebra",
    "apple",
    "play",
    "walk",
    "talk",
    "vowel",
    "rain",
    "number",
    "biology",
    "chemistry",
    "physics",
    "math",
    "urdu",
    "english"
];

function setInput(characters) {
    document.getElementById("input").value += characters;
}

function matchWord() {
    var inputString = document.getElementById("input").value
    
    for (var i = 0; i < wordsList.length; i++) {
        if (inputString.toLowerCase() === wordsList[i].slice(0, wordsList[i].length - 1).toLowerCase()) {
            isAlreadyExists = true;
            break;
        }
        else {
            isAlreadyExists = false;
        }
    } 
    if (inputString.length > 2) {
        if (!isAlreadyExists){
            for (var i = 0; i < dictionary.length; i++) {
                if (inputString.toLowerCase() === dictionary[i]) {
                    scoreMatched++;
                    wordsList.push(inputString + "M");
                    populateList();
                    break;
                }
                else {
                    if (i === dictionary.length - 1) {
                        scoreMismatched++;
                        wordsList.push(inputString + "N");
                        populateList();
                    }
                }
            }
        }
        else {
            alert(inputString + " already created and exists in the list.");    
        }
    }
    else {
        alert("Please enter atleast three characters string.");
    }

    document.getElementById("wordmatched").innerText = "Words Matched: " + scoreMatched;
    document.getElementById("wordmismatched").innerText = "Words Mismatched: " + scoreMismatched;
    
    document.getElementById("input").value = "";
}

function resetGame() {
    isAlreadyExists = false;
    scoreMatched = 0;
    scoreMismatched = 0;
    wordsList.length = 0;
    document.getElementById("wordmatched").innerText = "Words Matched: " + scoreMatched;
    document.getElementById("wordmismatched").innerText = "Words Mismatched: " + scoreMismatched;
    document.getElementById("input").value = "";
    document.getElementById("wordslist").innerHTML = "";
}

function populateList() {
    document.getElementById("wordslist").innerHTML = "";
    for (var i = 0; i < wordsList.length; i++) {
        
        if (wordsList[i].charAt(wordsList[i].length - 1) === "M" ) {
            document.getElementById("wordslist").innerHTML += "<tr><td class='" + "wordmatched1" + "'>" + wordsList[i].substring(0, wordsList[i].length - 1) + "</td><td class='" + "wordmatched2" + "'><img class='wordmatched' src='./assets/right.png' /></td></tr>"
        }
        else {
            document.getElementById("wordslist").innerHTML += "<tr><td class='" + "wordmismatched1" + "'>" + wordsList[i].substring(0, wordsList[i].length - 1) + "</td><td class='" + "wordmismatched2" + "'><img class='wordmismatched' src='./assets/wrong.png' /></td></tr>"
        }
    }
}
