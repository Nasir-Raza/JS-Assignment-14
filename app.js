var scoreMatched = 0, scoreMismatched = 0;
var wordsList = [];
var isAlreadyExists = false;
var x;

timerStart();

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
        if (!isAlreadyExists) {
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
    timerStop();
    timerStart();
}

function populateList() {
    document.getElementById("wordslist").innerHTML = "";
    for (var i = 0; i < wordsList.length; i++) {

        if (wordsList[i].charAt(wordsList[i].length - 1) === "M") {
            document.getElementById("wordslist").innerHTML += "<tr><td class='" + "wordmatched1" + "'>" + wordsList[i].substring(0, wordsList[i].length - 1) + "</td><td class='" + "wordmatched2" + "'><img class='wordmatched' src='./assets/right.png' /></td></tr>"
        }
        else {
            document.getElementById("wordslist").innerHTML += "<tr><td class='" + "wordmismatched1" + "'>" + wordsList[i].substring(0, wordsList[i].length - 1) + "</td><td class='" + "wordmismatched2" + "'><img class='wordmismatched' src='./assets/wrong.png' /></td></tr>"
        }
    }
}

// Timer functions

function timerStart() {
    var countDownDate = new Date();
    countDownDate = countDownDate.setMinutes(countDownDate.getMinutes() + 3);

    // Update the count down every 1 second
    x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("timer").innerHTML = "Time Left: " + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Time Left: OVER";
            showModal();
        }
    }, 1000);
}

function timerStop() {
    clearInterval(x);
}

// modal dialog

// Get the modal
var modal = document.getElementById("myModal");

// Show modal
function showModal() {
    if (scoreMatched > scoreMismatched) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! you have won the game.</p>"
    }
    else if (scoreMatched === scoreMismatched) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='tied'>Hard Luck! game has been tied.</p>"
    }
    else {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='lost'>Sorry! you have lost the game.</p>"
    }
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  resetGame();
}
