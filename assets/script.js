// Select elements by ID

var head = document.getElementById("start");
var startQuiz = document.getElementById("startBtn")
var secondsLeft = 90;
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("questions");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var response = document.getElementById("response");
var index = 0;

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice: [
            "strings",
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


// add eventLister on startBtn
startQuiz.addEventListener("click", startBtn)

// function to start the quiz
function startBtn() {
    console.log("start")
    head.style.display="none"
    quizEl.style.display="block"
   
// Create questions and answers and correct answer

console.log("index", questions[index].question);
questionEl.textContent=questions[index].question;

for (var i = 0; i < questions[index].choice.length; i++ ) {
    console.log(questions[index].choice[i]);

    
}
// adding questions into the array & adding setting the value of attribute
choice1.textContent = "1: " + questions[index].choice[0];
choice1.setAttribute("value",  questions[index].choice[0]);

choice2.textContent = "2: " + questions[index].choice[1];
choice2.setAttribute("value",  questions[index].choice[1]);

choice3.textContent = "3: " + questions[index].choice[2];
choice3.setAttribute("value",  questions[index].choice[2]);

choice4.textContent = "4: " + questions[index].choice[3];
choice4.setAttribute("value",  questions[index].choice[3]);

}
// event listerner on answer buttons
choice1.addEventListener("click", checkAnswer);
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);
choice4.addEventListener("click", checkAnswer);


function checkAnswer() {
    var answers = questions[index].correct;
    console.log(this);
    console.log(answers);
    console.log(response);
    if (this.value === answers) {
        response.innerHTML = "Correct!";
    } else {
        response.innerHTML = "Wrong!";
    }

}

function display ()


