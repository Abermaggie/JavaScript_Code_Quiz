//Define variables to use in JavaScript statements.//
var start= document.getElementById("start");
var quiz
var question= document.getElementsByClassName("question-screen");
var Answer1= document.getElementById("Answer1");
var Answer2= document.getElementById("Answer2");
var Answer3= document.getElementById("Answer3");
var Answer4= document.getElementById("Answer4");
var counter= document.getElementById("counter");
var finalScore= document.getElementById("finalScore");

//Define questions as an array within a variable tag//
var questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        Answer1: "strings",
        Answer2: "booleans",
        Answer3: "alerts",
        Answer4: "numbers",
        correct: 3
    },{
        question: "The condition in an if/else statement is enclosed within _____.",
        Answer1: "quotes",
        Answer2: "curly brackets",
        Answer3: "parenthesis",
        Answer4: "square brackets",
        correct: 3
    },{
        question: "Arrays in JavaScript can be used to store _____.",
        Answer1: "numbers and strings",
        Answer2: "other arrays",
        Answer3: "booleans",
        Answer4: "all of the above",
        correct: 1
    },{
        question: "String values must be enclosed within _____ when being assigned to variables.",
        Answer1: "commas",
        Answer2: "curly brackets",
        Answer3: "quotes",
        Answer4: "parenthesis",
        correct: 3
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        Answer1: "JavaScript",
        Answer2: "terminal/bash",
        Answer3: "for loops",
        Answer4: "console.log",
        correct: 4
    }
];

var lastQuestion = questions.length;
var runningQuestion=0;

function renderQuestion() {
    var q= questions[runningQuestion];
    question.innerHTML= "<p>"+ q.question + "</p>";
    Answer1.innerHTML= q.Answer1;
    Answer2.innerHTML= q.Answer2;
    Answer3.innerHTML= q.Answer3;
    Answer4.innerHTML= q.Answer4;

}
start.addEventListener("click",startQuiz);

function startQuiz() {
    start.style.display="none";
    renderQuestion();
    question.style.display="block";
    renderCounter();
    TIMER =setInterval(renderCounter,1000);
    score=0;
}
var counter=0;
var questionTime= 75;
let TIMER;
function rendercounter() {
    if (count => 0) {
        counter.innerHTML = count;

    } else {
        answerIsWrong();
    }
        count=0;
        if(runningQuestion < lastQuestion) {
            runningQuestion ++;
            renderQuestion();
    }else{
        clearInterval(Timer);
        scoreRender();
    }
}

function checkAnswer() {
    if(answer == questions [runningQuestion].correct) {
        score++
    }else {
        score
    }
    if(runningQuestion < lastQuestion) {
        runningQuestion ++;
        renderQuestion();
    } else{
        clearInterval(Timer);
        scoreRender();
    }
}

function scoreRender() {
    finalScore.style.display = "block";
    var scoreTotal= score;
    finalScore.innerHTML += "<p>" + scoreTotal + "</p>"
}