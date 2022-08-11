import questionsJSON from './questions.JSON' assert {type:'json'}
const start = document.querySelector(".start")
const quizCard = document.querySelector(".quizCard")
const resetButton = document.querySelector("#resetButton")
let answerButtons = document.querySelectorAll(".button")
let image = document.querySelector(".displayImage")
let questionText = document.querySelector("#questionDisplay")
let currentQuestion = document.querySelector("#currentQuestion")
let maxQuestions = document.querySelector("#maxQuestions")
let scoreNumber = document.querySelector("#scoreNumber")
let liveCounter = document.querySelector("#liveCounter")

//This function re declares queries for use inside of a click event, after they are established.
const reDeclaredQueries = () => {
    image = document.querySelector(".displayImage");
    currentQuestion = document.querySelector("#currentQuestion");
    maxQuestions = document.querySelector ("#maxQuestions");
    questionText = document.querySelector("#questionDisplay");   
    answerButtons = document.querySelectorAll(".button");
    scoreNumber = document.querySelector("#scoreNumber");
    liveCounter = document.querySelector("#liveCounter");
};

//Questions array with all the questions inside objects. 
const questionsArray = questionsJSON;

//This object contains all of the stats necessary for calculating score, question number, and lives.
const quizStats = {
    value : 0,
    number : 1,
    score : 0,
    lives: 3
};


//Updates innerHTML of the lives, question number, and score counters. Uses quizStats object.
const handleQuizStats = () => {
    maxQuestions.innerHTML = questionsArray.length;
    scoreNumber.innerHTML = quizStats.score;
    currentQuestion.innerHTML = quizStats.number;
};

//This function handles when an Incorrect Answer is entered. It updates the quiz stats and runs handleScoreDecrement as well as
//handleLiveLoss in order to accurately display the penalty for getting a question wrong.
const handleIncorrectAnswer = () => {
    handleScoreDecrement();
    handleQuizStats();
    handleLiveLoss();
};

//This function figures out which of the buttons needs to be the new correct answer.
const handleCorrectAnswer = (event) => {
    if (questionsArray[quizStats.value].buttonOne.isCorrect === true) {
        answerButtons[0].classList.add ("correctAnswer")
       }; 
    if (questionsArray[quizStats.value].buttonOne.isCorrect === false) {
        answerButtons[0].classList.add ("incorrectAnswer")
       };
    if (questionsArray[quizStats.value].buttonTwo.isCorrect === true) {
        answerButtons[1].classList.add ("correctAnswer")
       };
    if (questionsArray[quizStats.value].buttonTwo.isCorrect === false) {
        answerButtons[1].classList.add ("incorrectAnswer")
       };
    if (questionsArray[quizStats.value].buttonThree.isCorrect === true) {
        answerButtons[2].classList.add ("correctAnswer")
       };
    if (questionsArray[quizStats.value].buttonThree.isCorrect === false) {
        answerButtons[2].classList.add ("incorrectAnswer")
       }; 
    if (questionsArray[quizStats.value].buttonFour.isCorrect === true) {
        answerButtons[3].classList.add ("correctAnswer")
       };
    if (questionsArray[quizStats.value].buttonFour.isCorrect === false) {
        answerButtons[3].classList.add ("incorrectAnswer")
       };
}

//Handles when the decrement of score when an incorrect answer is submitted. Makes sure score can not go lower than 0.
const handleScoreDecrement = () => {
    if (quizStats.score <= 2) {
        quizStats.score = 0;
    } else if (quizStats.score > 2) {
        quizStats.score = quizStats.score - 2;
    };
};

//This function handles the changing of the card data whenever a correct answer is entered.
const handleCardChange = (event) => {
    quizStats.score = quizStats.score + 5; 
    handleQuizStats();
    handleWin();
    handleReset();
    answerButtons[0].innerHTML = questionsArray[quizStats.value].buttonOne.value;
    answerButtons[1].innerHTML = questionsArray[quizStats.value].buttonTwo.value;
    answerButtons[2].innerHTML = questionsArray[quizStats.value].buttonThree.value;
    answerButtons[3].innerHTML = questionsArray[quizStats.value].buttonFour.value;
    questionText.innerHTML = questionsArray [quizStats.value].question; 
    image.src = questionsArray[quizStats.value].image;
    handleCorrectAnswer(event);
 };

 //Handles a timeout function in order for the updating of a card to take half a second. This allows the correct answer
 //style to display for half a second before moving on to the next question.
 const timeoutCardChange = (event) => {
    setTimeout(handleQuestionChange, 500, event);
    setTimeout(handleCardChange, 500, event);
};

//Handles timeout of background effect class for correct and incorrect answers.
const timeoutBGS = (event) => {
    setTimeout(removeCorrectBG, 500, event);
};

//Removes the ID of the button, used for background management on incorrect and correct Backgrounds.
const removeCorrectBG = (event) => {
    event.id = "";
};

//This is where we detect if an answer is correct. If it is move to next question using handleCardChange. 
const handleNextQuestion = (event) => {
    if (event.classList.contains ("correctAnswer")) {
        event.id = "correctAnswerBG";
        timeoutBGS(event);
        answerButtons.forEach((button) => {
            button.classList.remove("correctAnswer");
            button.classList.remove("incorrectAnswer");
        });
     timeoutCardChange(event);
    } else if (event.classList.contains ("incorrectAnswer")) {
        //CHange to class change of button (Make it red) and lower life points.
        event.id = "incorrectAnswerBG";
       timeoutBGS(event);
       handleIncorrectAnswer();
    }
}

//Increments score and question number in the quizStats object.
const handleQuestionChange = () => {
    quizStats.value = quizStats.value + 1;
    quizStats.number = quizStats.number + 1;
};

//This function injects the card HTML initially and is used when the Reset button is activated.
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
                        <p id = "liveCounter">Lives: OOO</p>
                    </div>
                    <div class="scoreTally">    
                        <p>Score: <span id = "scoreNumber">0</span></p>
                    </div>
                </div>
            </div>`;
            reDeclaredQueries();
            handleQuizStats();
            handleReset();
            answerButtons.forEach( (button) => {
                button.addEventListener("click", () => {
                        handleNextQuestion(button);
                    })
            })
        
};

//Handles win conditions, player must make it to the final question with at least one life remaining.
const handleWin = () => {
    if (quizStats.number > questionsArray.length) {
        quizCard.innerHTML = `
        <div id = "victoryContainer">
            <h1 id = "winText">YOU WIN!!!</h1>
            <h3>You had a score of ${quizStats.score}.</h3>
        </div>
        `;
    };
};

//This function is responsible for handling lives. If a player loses all of their lives, the loss screen is rendered.
const handleLiveLoss = () => {
    if (quizStats.lives >= 3 ) {
        liveCounter.innerHTML = "Lives: XOO";
    }else if (quizStats.lives >= 2) {
        liveCounter.innerHTML = "Lives: XXO";
    }else if (quizStats.lives >= 1) {
        liveCounter.innerHTML = "Lives: XXX LAST LIFE!!!";
    } else if (quizStats.lives >= 0) {
        quizCard.innerHTML = `
        <div id= "lossContainer">
            <h3>You Lost! Hit Reset to try again!</h3>
            <h4>You had a score of ${quizStats.score}.</h4>
        </div>
        `;
    };
    quizStats.lives = quizStats.lives -1;
}; 

//Handles the reset button. Returns to question 1 and resets all score and live values.
const handleReset = () => {
    resetButton.addEventListener("click", () => {
        quizStats.number = 1;
        quizStats.score = 0;
        quizStats.lives = 3;
        quizStats.value = 0;
        startButtonOnReset();
    })
};


//Starts the game.
start.addEventListener("click", () => {
    startButtonOnReset()
});

start.addEventListener("touchstart", () => {
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
                    <p id = "liveCounter">Lives: OOO</p>
                </div>
                <div class="scoreTally">    
                    <p>Score: <span id = "scoreNumber">0</span></p>
                </div>
            </div>
        </div>`;
        reDeclaredQueries();
        handleQuizStats();
        handleReset();
        answerButtons.forEach( (button) => {
            button.addEventListener("touchstart", () => {
                    handleNextQuestion(button);
                })
        })
})