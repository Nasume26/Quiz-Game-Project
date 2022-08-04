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
let liveCounter = document.querySelector("#liveCounter")


const reDeclaredQueries = () => {
    image = document.querySelector(".displayImage");
    currentQuestion = document.querySelector("#currentQuestion");
    maxQuestions = document.querySelector ("#maxQuestions");
    questionText = document.querySelector("#questionDisplay");   
    answerButtons = document.querySelectorAll(".button");
    scoreNumber = document.querySelector("#scoreNumber");
    liveCounter = document.querySelector("#liveCounter");
};

const handleLiveLoss = () => {
    if (quizStats.lives >= 3 ) {
        liveCounter.innerHTML = "Lives: XOO"
    }else if (quizStats.lives >= 2) {
        liveCounter.innerHTML = "Lives: XXO"
    }else if (quizStats.lives >= 1) {
        liveCounter.innerHTML = "Lives: XXX LAST LIFE!!!"
        console.log(quizStats.lives)
    } else if (quizStats.lives >= 0) {
        quizCard.innerHTML = `
        <h3>You Lost! Hit Reset to try again!</h3>
        <h4>You had a score of ${quizStats.score} </h4>`
    }
    quizStats.lives = quizStats.lives -1;
    console.log(quizStats.lives)
} 

const handleWin = () => {
    if (quizStats.number > questionsArray.length) {
        quizCard.innerHTML = `
        <h1>YOU WIN</h1>
        <h3>You had a score of ${quizStats.score}</h3>
        `
    };
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
    };
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

//Questions array with all the questions inside objects. 
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
    image : "./images/insectsintheworld.jpeg",

    question: "Roughly how many insects are there in the world?"
},{
    buttonOne : {
        value: "100 Million Years",
        isCorrect: false
    },
    buttonTwo : {
        value: "300 Million Years",
        isCorrect: true
    },
    buttonThree : {
        value: "250 Million Years",
        isCorrect: false
    },
    buttonFour : {
        value: "4 Billion Years",
        isCorrect: false
    },
    image : "./images/dragonfliesonearth.jpeg",

    question: "Roughly how long have dragonflies been on earth?"
},{
    buttonOne : {
        value: "Atlas Moth",
        isCorrect: false
    },
    buttonTwo : {
        value: "Titan Beetle",
        isCorrect: false
    },
    buttonThree : {
        value: "Hercules Beetle",
        isCorrect: false
    },
    buttonFour : {
        value: "White Witch Moth",
        isCorrect: true
    },
    image : "./images/whitewitchmoth.jpeg",

    question: "Which of these is the largest insect in the world"
},{
    buttonOne : {
        value: "Pillbugs",
        isCorrect: false
    },
    buttonTwo : {
        value: "Moths",
        isCorrect: false
    },
    buttonThree : {
        value: "Crickets",
        isCorrect: true
    },
    buttonFour : {
        value: "Beetles",
        isCorrect: false
    },
    image : "./images/weather.jpeg",

    question: "Which of these bugs are thought to predict the weather in one way or the other"
},{
    buttonOne : {
        value: "Screaming",
        isCorrect: false
    },
    buttonTwo : {
        value: "Quacking",
        isCorrect: true
    },
    buttonThree : {
        value: "Buzzing",
        isCorrect: false
    },
    buttonFour : {
        value: "Whistling",
        isCorrect: false
    },
    image : "./images/queenbee.jpeg",

    question: "What does the 'piping' of a Queen Bee sound like?"
},{
    buttonOne : {
        value: "Ladybugs",
        isCorrect: true
    },
    buttonTwo : {
        value: "Crickets",
        isCorrect: false
    },
    buttonThree : {
        value: "Butterflys",
        isCorrect: false
    },
    buttonFour : {
        value: "Bees",
        isCorrect: true
    },
    image : "./images/garden.webp",

    question: "Which of these bugs is beneficial to your garden?"
},{
    buttonOne : {
        value: "1000 times",
        isCorrect: false
    },
    buttonTwo : {
        value: "80 times",
        isCorrect: false
    },
    buttonThree : {
        value: "50 times",
        isCorrect: true
    },
    buttonFour : {
        value: "10 times",
        isCorrect: false
    },
    image : "./images/ants.webp",

    question: "How many times an ant's weight is the same ant able to carry?"
},]

//all questions taken from facts.net/bug-facts and si.edu

//create a function called handleCorrect Answer

const handleQuestionChange = () => {
    quizStats.value = quizStats.value + 1;
    quizStats.number = quizStats.number + 1;
};

const handleCorrectAnswer = (event) => {
    if (questionsArray[quizStats.value].buttonOne.isCorrect === true) {
        answerButtons[0].classList.add ("correctAnswer")
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

const removeCorrectBG = (event) => {
    event.id = "";
    console.log(event)
}

const timeoutBGS = (event) => {
    setTimeout(removeCorrectBG, 500, event)
}

const timeoutCardChange = (event) => {
    setTimeout(handleQuestionChange, 500, event)
    setTimeout(handleCardChange, 500, event)
}

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
   image.src = questionsArray[quizStats.value].image
   handleCorrectAnswer(event);

}
//do the same as above for incorrect instances see if you CAN use a for loop but i doubt it.


const handleIncorrectAnswer = () => {
    handleScoreDecrement();
    handleQuizStats();
    handleLiveLoss();
}

//This is where we detect if an answer is correct. If it is move to next question using handleCardChange. 
const handleNextQuestion = (event) => {
    if (event.classList.contains ("correctAnswer")) {
        event.id = "correctAnswerBG"
        timeoutBGS(event);
        answerButtons.forEach((button) => {
            button.classList.remove("correctAnswer")
            button.classList.remove("incorrectAnswer")
        });
     timeoutCardChange(event);
    } else if (event.classList.contains ("incorrectAnswer")) {
        //CHange to class change of button (Make it red) and lower life points.
        event.id = "incorrectAnswerBG";
       timeoutBGS(event);
       handleIncorrectAnswer();
    }
}



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
                        <p id = "liveCounter">Lives: OOO</p>
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



