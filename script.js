/* Timer
//Create variables for start button and timer text
//function for timer to start after button click
*/

var startButtonEl = document.querySelector("#start");
var timerEl = document.querySelector("#seconds");
var timer;
var timerCount;

var correctButtonEl = document.querySelector(".correct");
var wrongButtonEl = document.querySelector(".wrong");

var isDone = false;

function startQuizTimer() {
    isDone = false;
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
      // Applies timer to text variable
      timerEl.textContent = timerCount;
      if (isDone && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
      // Stops timer when time runs out
      if (timerCount == 0) {
        clearInterval(timer);
    }
      }
    }, 1000);
  }

// Subtracts seconds from timer when wrong answer is selected
function subTime() {
    timerCount-= 7;
    timerEl.textContent = timerCount;
}


startButtonEl.addEventListener("click", startQuizTimer);
startButtonEl.addEventListener("click", startQuiz);
startButtonEl.addEventListener("click", question1);


function question1() {
   document.querySelector(".question-1").style.display = "block";
}

function question2() {
    document.querySelector(".question-2").style.display="block";
    document.querySelector(".question-1").style.display="none";
}

function question3() {
    document.querySelector(".question-3").style.display="block";
    document.querySelector(".question-2").style.display="none";
}

function question4() {
    document.querySelector(".question-4").style.display="block";
    document.querySelector(".question-3").style.display="none";
}

function question5() {
    document.querySelector(".question-5").style.display="block";
    document.querySelector(".question-4").style.display="none";
}

function results() {
    document.querySelector(".results").style.display="block";
    document.querySelector(".question-5").style.display="none";
    isDone = true;
}

function highscores() {
    document.querySelector(".highscores").style.display="block";
    document.querySelector(".results").style.display="none";
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



