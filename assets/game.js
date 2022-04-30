var TimeDisplay = document.querySelector(".TimeDisplay")
var TimeLeft = 5
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
]

var startQuiz = function(){
    startButton.remove();
    renderQuestion()
}

var renderQuestion = function(){
    var questionDiv = document.createElement("div")
    questionDiv.innerHTML = questionBank[questionIndex].question
        quizSection.appendChild(questionDiv)
        renderChoices()
}

var renderChoices = function() {
    for (let i = 0; i< questionBank.answers.length; i++) {
        answersButton.setAttribute("class", "answer-button")
        answerButton.setAttribute("data-answers", questionBank[questionIndex].answers[i])
        answerButton.textContent = questionBank[questionIndex].answers[0]
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

    var correct = questionBank[questionIndex].correctAnswer
    if (questionIndex === questionBank.length-1){

    }
    else if (event.target.dataset.answer === questionBank[questionIndex].correctAnswer){
        nextQuestionHelper()
    }
    else if (event.target.dataset.answer != questionBank[questionIndex].correctAnswer){
        nextQuestionHelper
    }
    }
}

var answerButton = document.createElement("button")
startButton.addEventListener("Click", startQuiz)
answer.Div.addEventListener("Click", checkAnswer)

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





DisplayTimeLeft();

