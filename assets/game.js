var TimeDisplay = document.querySelector(".TimeDisplay")
var TimeLeft = 60
var startButton = document.getElementById("start-button")
var quizSection = document.getElementById("quiz-section")
var answerDiv = document.createElement("div")
var questionDiv = document.createElement("div")
var questionIndex = 0

var questionBank = [
    {
        Question: "Commonly used data values do not include",
        Answers: [
            "Boolen",
            "Numbers and Arrays",
            "Arrays",
            "Loops",
        ],
        correctAnswer: "Loops"
    },
    {
        Question: "The condition of an if else statement is enclosed with a",
        Answers: [
            "Parenthesis",
            "Curly Brackets",
            "Square Brackets",
            "Slashes",
        ],
        correctAnswer: "Parenthesis"
    },
    {
        Question: "Arrays in javascript can be used to store______",
        Answers: [
            "Booleans",
            "Numbers and Strings",
            "Other arrays",
            "all of the above",
        ],
        correctAnswer: "all of the above"
    },
    {
        Question: "String values must be enclosed within ______ when being assinged to varaibles",
        Answers: [
            ",,",
            "{}",
            "[]",
            "()",
        ],
        correctAnswer:"{}"
    },
    {
        Question: "A very useful tool used during development and debugging for printing content to the debuuger is:",
        Answers: [
            "JavaScript",
            "Terminal/bash",
            "For loops",
            "console.log",
        ],
        correctAnswer: "console.log"
    }
]

var startQuiz = function(){
    startButton.remove();
    DisplayTimeLeft();
    renderQuestion();
}

var renderQuestion = function(){
    questionDiv.innerHTML = questionBank[questionIndex].Question
    quizSection.appendChild(questionDiv)
    renderChoices()    
    
}

var renderChoices = function(){

    for (let i = 0; i< questionBank[questionIndex].Answers.length; i++) {
        var answerButton = document.createElement("button")
        answerButton.setAttribute("class", "answer-button")
        answerButton.setAttribute("data-answers", questionBank[questionIndex].Answers[i])
        answerButton.textContent = questionBank[questionIndex].Answers[i]
        answerDiv.appendChild(answerButton)
        
    }

quizSection.appendChild(answerDiv)
}

var checkAnswer = function(event){

    var nextQuestionHelper = function(){
        questionIndex++

        questionDiv.remove()
        answerDiv.innerHTML = ""

        renderQuestion()
    }

    // var correct = questionBank[questionIndex].correctAnswer
    if (questionIndex === questionBank.length-1){

    }
    else if (event.target.dataset.answer === questionBank[questionIndex].correctAnswer){
        nextQuestionHelper()
    }
    else if (event.target.dataset.answer != questionBank[questionIndex].correctAnswer){
        nextQuestionHelper()
        window.alert("Incorrect Answer")
        
    }
    
}


var answerButton = document.createElement("button")

function DisplayTimeLeft (){
var Timer = setInterval(() => {
        TimeDisplay.textContent = "Time Remaining: " + TimeLeft--

    if (TimeLeft < 0){
        clearInterval(Timer)
       setTimeout(() => {
        window.location.href="Gameover.html"    
       }, 1000);
    } 

    }, 1000);
}




startButton.addEventListener("click", startQuiz)
answerDiv.addEventListener("click", checkAnswer)


