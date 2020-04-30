// Select elements by ID

var head = document.getElementById("start");
var startQuiz = document.getElementById("startBtn")
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("questions");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var response = document.getElementById("response");
var index = 0



// add eventLister on startBtn
startQuiz.addEventListener("click", startBtn)

// function to start the quiz
function startBtn() {
    console.log("start")
    head.style.display="none"
    quizEl.style.display="block"
   


// Create questions and answers and correct answer
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice: [
            "stings",
            "booleans",
            "alerts",
            "numbers",
        ],
        correct:"alerts"
    },

    {
        question: "The condition in an if/else statement is enclosed within ______.",
        choice: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets",
        ],
        correct: "curly brackets"
    },

    {
        question: "Arrays in JavaScript can be used to store ______.",
        choice: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all the above",
        ],
            correct: "all the above"
    },

    {
        question: "String values must be enclosed withing ______ when being assigned to variables.",
        choice: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis",
        ],
        correct: "choice3"
    },

    {
        question: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        choice: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log",
        ],
        correct: "console.log"
    },
    
]
console.log("index", questions[index].question);
questionEl.textContent=questions[index].question;

for (var i = 0; i < questions[index].choice.length; i++ ) {
    console.log(questions[index].choice[i])
}

// function to start timer counting down from 90 seconds
// timerEl();
// var countdown = setInterval(function() {
//     timer--;
// })
}
