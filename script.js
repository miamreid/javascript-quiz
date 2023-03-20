/* Timer
//Create variables for start button and timer text
//function for timer to start after button click
*/

var startButtonEl = document.querySelector("#start");
var timerEl = document.querySelector("#seconds");
var timer;
var timerCount;
var answer = document.querySelector("#answer");
var submitButtonEl = document.querySelector(".submit-button");

//toggle variable to stop/start timer when quiz is done
var isDone = false;

function startQuizTimer() {
    isDone = false;
    timerCount = 75;
    startTimer();
  }

//Hides start screen and proceeds to question 1 on "start" button click
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
      if(timerCount >= 0) {
      if (isDone && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
      }
      }
      // Stops timer when time runs out
      if (timerCount === 0) {
        clearInterval(timer);
        results();
    }
    }, 1000);
  }

// Subtracts seconds from timer when wrong answer is selected and applies "Wrong!" answer text for each wrong button click
function subTime() {
    document.getElementById("answer-1").innerHTML = "Wrong!";
    document.getElementById("answer-2").innerHTML = "Wrong!";
    document.getElementById("answer-3").innerHTML = "Wrong!";
    document.getElementById("answer-4").innerHTML = "Wrong!";
    document.getElementById("answer-5").innerHTML = "Wrong!";
    timerCount-= 7;
    timerEl.textContent = timerCount;

    if(timerCount < 1) {
        clearInterval(timer);
        timerEl.textContent = 0;
        results();
    }
}

startButtonEl.addEventListener("click", startQuizTimer);
startButtonEl.addEventListener("click", startQuiz);
startButtonEl.addEventListener("click", question1);
submitButtonEl.addEventListener("click", highscores);

//makes question 1 visible
function question1() {
   document.querySelector(".question-1").style.display = "block";
}


//hides previous question and makes new question visible (functions question2-question5)
function question2() {
    document.querySelector(".question-2").style.display="block";
    document.querySelector(".question-1").style.display="none";
    document.getElementById("answer-2").innerHTML = "Correct!";
}

function question3() {
    document.querySelector(".question-3").style.display="block";
    document.querySelector(".question-2").style.display="none";
    document.getElementById("answer-3").innerHTML = "Correct!";
}

function question4() {
    document.querySelector(".question-4").style.display="block";
    document.querySelector(".question-3").style.display="none";
    document.getElementById("answer-4").innerHTML = "Correct!";
}

function question5() {
    document.querySelector(".question-5").style.display="block";
    document.querySelector(".question-4").style.display="none";
    document.getElementById("answer-5").innerHTML = "Correct!";
}

//displays results screen, hiding all previous question screens and start screen (in case timer ran out on one of these questions
//timer stops with isDone function
//time left on the timer is stored to timeLeft variable
//saves time left to quiz results and displays on screen
function results() {
    document.querySelector(".results").style.display="block";
    document.querySelector(".question-5").style.display="none";
    document.querySelector(".question-4").style.display="none";
    document.querySelector(".question-3").style.display="none";
    document.querySelector(".question-2").style.display="none";
    document.querySelector(".question-1").style.display="none";
    document.querySelector("#screen-1").style.display="none";
    isDone = true;
    timeLeft = timerCount;
    console.log(timeLeft);
    document.getElementById("quiz-results").innerHTML += timeLeft;
}

//makes highscores screen visible, and hiding all other screens
//stops timer and hides the header when screen is visible
function highscores() {
    document.querySelector(".highscores").style.display="block";
    document.querySelector(".results").style.display="none";
    document.querySelector(".question-5").style.display="none";
    document.querySelector(".question-4").style.display="none";
    document.querySelector(".question-3").style.display="none";
    document.querySelector(".question-2").style.display="none";
    document.querySelector(".question-1").style.display="none";
    document.querySelector("#screen-1").style.display="none";
    document.querySelector(".hide").style.display="none";
    document.querySelector(".timer").style.display="none";
    isDone = true;
}

//saves the users initials when entered on the results screen
//appends the initials and results into a new list item
function pushData() {
    let highscoreList = document.getElementById("highscore-list");
    let li = document.createElement("li");
    li.classList.add("user-score");
    var inputText = document.getElementById("initials").value + " - " + timeLeft;
    var node = document.createTextNode(inputText);
    li.appendChild(node);
    highscoreList.appendChild(li);
}

//when reset button is clocked, resets timer, quiz results, wrong answers
//makes start screen and header visible again, while hiding highscores screen
function resetQuiz() {
    document.querySelector(".highscores").style.display="none";
    document.querySelector("#screen-1").style.display="block";
    document.querySelector(".hide").style.display="block";
    document.querySelector(".timer").style.display="block";
    timerCount = 75;
    timerEl.textContent = timerCount;
    document.getElementById("quiz-results").innerHTML = "Your final score is: ";
    document.getElementById("initials").value = "";
    document.getElementById("answer-1").innerHTML = "";
    document.getElementById("answer-2").innerHTML = "";
    document.getElementById("answer-3").innerHTML = "";
    document.getElementById("answer-4").innerHTML = "";
    document.getElementById("answer-5").innerHTML = "";
}

//clears list items from the ordered list item when button is clicked
function clearScores() {
    let highscoreList = document.querySelector(".user-score");
    highscoreList.remove();
}
