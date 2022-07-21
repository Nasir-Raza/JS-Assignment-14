var scoreMatched = 0, scoreMismatched = 0;
var wordsList = [];

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
    "azhar",
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
    if (inputString.length > 2) {
        
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
        alert("Please enter atleast three characters string.")
    }

    document.getElementById("wordmatched").innerText = "Words Matched: " + scoreMatched;
    document.getElementById("wordmismatched").innerText = "Words Mismatched: " + scoreMismatched;
    
    document.getElementById("input").value = "";
}

function resetGame() {
    document.getElementById("input").value = "";
    scoreMatched = 0;
    scoreMismatched = 0;
    document.getElementById("wordmatched").innerText = "Words Matched: " + scoreMatched;
    document.getElementById("wordmismatched").innerText = "Words Mismatched: " + scoreMismatched;
    document.getElementById("wordslist").innerHTML = "";
}

function populateList() {
    

    document.getElementById("wordslist").innerHTML = "";
    for (var i = 0; i < wordsList.length; i++) {
        
        if (wordsList[i].charAt(wordsList[i].length - 1) === "M" ) {
            document.getElementById("wordslist").innerHTML += "<tr><td class='" + "wordmatched" + "'>" + wordsList[i].substring(0, wordsList[i].length - 1) + "</td></tr>"
        }
        else {
            document.getElementById("wordslist").innerHTML += "<tr><td class='" + "wordmismatched" + "'>" + wordsList[i].substring(0, wordsList[i].length - 1) + "</td></tr>"
        }
    }
}
