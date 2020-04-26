// Select elements by ID

var startQuiz = document.getElementById("startBtn")
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var response = document.getElementById("response");



// add eventLister on startBtn
startQuiz.addEventListener("click", startBtn)

// function to start the quiz
function startBtn() {
    console.log("start")
    startQuiz.classList.add("hide")
    quizEl.classList.remove("hide")
   
// function to start timer counting down from 90 seconds
    timerEl();
    var countdown = setInterval(function() {
        timer--;
    })

// Create questions and answers and correct answer
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        correct: "choice4"
    },

    {
        question: "The condition in an if/else statement is enclosed within ______.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        correct: "choice2"
    },

    {
        question: "Arrays in JavaScript can be used to store ______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all the above",
        correct: "choice4"
    },

    {
        question: "String values must be enclosed withing ______ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parenthesis",
        correct: "choice3"
    },

    {
        question: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        correct: "choice4"
    },
]

}
