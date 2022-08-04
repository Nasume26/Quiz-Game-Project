//add query selector to button -> add event listener to button.
const start = document.querySelector(".start")
const quizCard = document.querySelector(".quizCard")
const resetButton = document.querySelector("#resetButton")
let answerButtons = document.querySelectorAll(".button")
let image = document.querySelector(".displayImage")
let questionText = document.querySelector("#questionDisplay")
let currentQuestion = document.querySelector("#currentQuestion")
let maxQuestions = document.querySelector("#maxQuestions")
let scoreNumber = document.querySelector("#scoreNumber")


const reDeclaredQueries = () => {
    image = document.querySelector(".displayImage");
    currentQuestion = document.querySelector("#currentQuestion");
    maxQuestions = document.querySelector ("#maxQuestions");
    questionText = document.querySelector("#questionDisplay");   
    answerButtons = document.querySelectorAll(".button");
    scoreNumber = document.querySelector("#scoreNumber")
};


const handleReset = () => {
    resetButton.addEventListener("click", () => {
        quizStats.number = 1;
        quizStats.score = 0;
        quizStats.lives = 3;
        quizStats.value = 0;
        startButtonOnReset();
    })
}

const handleScoreDecrement = () => {
    if (quizStats.score <= 2) {
        quizStats.score = 0;
    } else if (quizStats.score > 2) {
        quizStats.score = quizStats.score - 2;
    }
}

const handleQuizStats = () => {
    maxQuestions.innerHTML = questionsArray.length;
    scoreNumber.innerHTML = quizStats.score;
    currentQuestion.innerHTML = quizStats.number;
}

const quizStats = {
    value : 0,
    number : 1,
    score : 0,
    lives: 3
}


const questionsArray = [{
    buttonOne : {
        value: "Container",
        isCorrect : true
    },
    buttonTwo : {
        value: "Two",
        isCorrect: false
    },
    buttonThree: {
        value: "Three",
        isCorrect: false
    },
    buttonFour : {
        value: "Four",
        isCorrect: false
    },
    image : "nullImage",

    question : "Null Question"
}, {
    buttonOne : {
        value: "10 Quintillion",
        isCorrect: true
    },
    buttonTwo : {
        value: "40 Trillion",
        isCorrect: false
    },
    buttonThree : {
        value: "78.6 Billion",
        isCorrect: false
    },
    buttonFour : {
        value: "500 Trillion",
        isCorrect: false
    },
    image : "./images/download.png",

    question: "Roughly how many insects are there in the world?"
}]

//create a function called handleCorrect Answer

const handleQuestionChange = () => {
    quizStats.value = quizStats.value + 1;
    quizStats.number = quizStats.number + 1;
};

const handleCorrectAnswer = () => {
    if (questionsArray[quizStats.value].buttonOne.isCorrect === true) {
        answerButtons[0].classList.add ("correctAnswer")
        console.log(answerButtons[0].classList)
        console.log(answerButtons[1].classList)
       } 
    if (questionsArray[quizStats.value].buttonOne.isCorrect === false) {
        answerButtons[0].classList.add ("incorrectAnswer")
       } 
    if (questionsArray[quizStats.value].buttonTwo.isCorrect === true) {
        answerButtons[1].classList.add ("correctAnswer")
       }
    if (questionsArray[quizStats.value].buttonTwo.isCorrect === false) {
        answerButtons[1].classList.add ("incorrectAnswer")
       }
    if (questionsArray[quizStats.value].buttonThree.isCorrect === true) {
        answerButtons[2].classList.add ("correctAnswer")
       }
    if (questionsArray[quizStats.value].buttonThree.isCorrect === false) {
        answerButtons[2].classList.add ("incorrectAnswer")
       } 
    if (questionsArray[quizStats.value].buttonFour.isCorrect === true) {
        answerButtons[3].classList.add ("correctAnswer")
       }
    if (questionsArray[quizStats.value].buttonFour.isCorrect === false) {
        answerButtons[3].classList.add ("incorrectAnswer")
       }
}


const handleCardChange = (event) => {
   quizStats.score = quizStats.score + 5; 
   handleQuizStats();
   handleReset();
   answerButtons[0].innerHTML = questionsArray[quizStats.value].buttonOne.value;
   answerButtons[1].innerHTML = questionsArray[quizStats.value].buttonTwo.value;
   answerButtons[2].innerHTML = questionsArray[quizStats.value].buttonThree.value;
   answerButtons[3].innerHTML = questionsArray[quizStats.value].buttonFour.value;
   questionText.innerHTML = questionsArray [quizStats.value].question; 
   image.src = questionsArray[quizStats.value].image
   handleCorrectAnswer();

}
//do the same as above for incorrect instances see if you CAN use a for loop but i doubt it.


//This is where we detect if an answer is correct. If it is move to next question using handleCardChange. 
const handleNextQuestion = (event) => {
    if (event.classList.contains ("correctAnswer")) {
        
        answerButtons.forEach((button) => {
            button.classList.remove("correctAnswer")
            button.classList.remove("incorrectAnswer")
        });
        handleQuestionChange();
        handleCardChange(event);
    } else if (event.classList.contains ("incorrectAnswer")) {
        //CHange to class change of button (Make it red) and lower life points.
        handleScoreDecrement();
        handleQuizStats();
        console.log("Incorrect Button Pressed")
    }
}

console.log(questionsArray[0])

    start.addEventListener("click", () => {
        startButtonOnReset()
    })



const startButtonOnReset = () => {
    quizCard.innerHTML = `
        <div class="quizContainer">
                <div class = "numberContainer">
                    <h4>Question <span id ="currentQuestion">1</span> of <span id = "maxQuestions">?</span></h4>
                </div>
                <div class="imageContainer">
                    <img class="displayImage" src="./images/ladybug-leaf.jpeg" alt="IMAGE TO DISPLAY HERE" >
                </div>
                <div class= "questionContainer">
                    <h3 id = "questionDisplay">How many insects can a lady bug eat in it's whole lifetime?</h3>
                </div>
                <div class="buttonContainer">
                    <div class="buttonRowOne">
                        <button class="button buttonOne correctAnswer">5,000</button> <button class="button buttonTwo incorrectAnswer">10,000</button>
                    </div>
                    <div class = "buttonRowTwo">
                        <button class="button buttonThree incorrectAnswer">1 Million</button> <button class="button buttonFour incorrectAnswer">500,000</button> 
                    </div>
                </div>
                <div class="scoreContainer">
                    <div class="livesRemaining">
                        <p>OOO</p>
                    </div>
                    <div class="scoreTally">    
                        <p>Score: <span id = "scoreNumber">0</span></p>
                    </div>
                </div>
            </div>`
            reDeclaredQueries();
            handleQuizStats();
            handleReset();
            answerButtons.forEach( (button) => {
                button.addEventListener("click", () => {
                        handleNextQuestion(button);
                        console.log(button)
                    })
            })
        
}




//when start button is pressed, create question 1 (deleting the start button in the process.) ->
//there should be a bottom line with a p tag, centered in the p tag (or right aligned) will be three O's
//whenever an incorrect answer is recieved a span loses an O (use if statements to determine if one has been
//already lost. When all three lives are lost reset the entire Div to a HUGE game over screen.)
//define all necessary classes.
//Define a variable called Question NUmber. This will control the arrays information positioning on succesful 
//answer clicks.


//create an array called Questions -> populate the array with your question information.



