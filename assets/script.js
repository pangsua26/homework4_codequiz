var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");


function startTimer() {
    document.getElementById("start").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");

    setTimer();
    makeQuestions();
}

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft -- ;
        timerEl.textContent = ""
    })
}