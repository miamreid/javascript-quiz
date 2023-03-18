/* Timer
//Create variables for start button and timer text
//function for timer to start after button click
*/

var startButtonEl = document.querySelector("#start");
var timerEl = document.querySelector("#seconds");
var timer;
var timerCount;

var correctButtonEl = document.querySelector(".correct");

function startQuizTimer() {
    timerCount = 75;
    startTimer();
  }

function startQuiz() {
    var startScreen = document.querySelector("#screen-1");
    if(startScreen.style.display === "none") {
    startScreen.style.display = "block";
    } else {startScreen.style.display = "none";
    }
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
    }, 1000);
  }

startButtonEl.addEventListener("click", startQuizTimer);
startButtonEl.addEventListener("click", startQuiz);

function question1() {
    var firstQ = document.querySelector("#question-1");
    if(firstQ.style.display === "none") {
        firstQ.style.display = "block";
    } else {firstQ.style.display = "none"}
}

function question2() {
    var secondQ = document.querySelector("#question-2");
    if(secondQ.style.display === "none") {
        secondQ.style.display = "block";
    } else {secondQ.style.display = "none"}
}

function question3() {
    var thirdQ = document.querySelector("#question-3");
    if(thirdQ.style.display === "none") {
        thirdQ.style.display = "block";
    } else {thirdQ.style.display = "none"}
}

function question4() {
    var fourthQ = document.querySelector("#question-4");
    if(fourthQ.style.display === "none") {
        fourthQ.style.display = "block";
    } else {fourthQ.style.display = "none"}
}

function question5() {
    var fifthQ = document.querySelector("#question-5");
    if(fifthQ.style.display === "none") {
        fifthQ.style.display = "block";
    } else {fifthQ.style.display = "none"}
}



/*End game
//Create variables for end game screen
//Function for end screen when timer equals 0 or all questions are answered
//Conditions that timer = 0 OR all questions done
*/

/*Correct answers shown
//Create variable for correct answer text
//Condition = correct answer
*/

/*Incorrect answer
//Create variable for incorrect answer text
//Create function to reduce timer if incorrect answer selected
//Condition = incorrect answer
*/



