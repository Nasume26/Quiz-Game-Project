//add query selector to button -> add event listener to button.
const start = document.querySelector(".start")
const quizCard = document.querySelector(".quizCard")
let answerButtons = document.querySelectorAll(".button")
let image = document.querySelector("#displayImage")


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
    }
}]

//create a function called handleCorrect Answer

const handleCardChange = (event) => {
   answerButtons[0].innerHTML = questionsArray[0].buttonOne.value;
   answerButtons[1].innerHTML = questionsArray[0].buttonTwo.value;
   answerButtons[2].innerHTML = questionsArray[0].buttonThree.value;
   answerButtons[3].innerHTML = questionsArray[0].buttonFour.value;
   if (questionsArray[0].buttonOne.isCorrect === true) {
    answerButtons[0].classList.add ("correctAnswer")
    console.log(answerButtons[0].classList)
    console.log(answerButtons[1].classList)
   }
}
//do the same as above for incorrect instances see if you CAN use a for loop but i doubt it.

const handleNextQuestion = (event) => {
    if (event.classList.contains ("correctAnswer")) {
        //INCREASE ARRAY INDEX HERE
        answerButtons.forEach((button) => {
            button.classList.remove("correctAnswer")
            button.classList.remove("incorrectAnswer")
        })
        handleCardChange(event)
    } else if (event.classList.contains ("incorrectAnswer")) {
        //CHange to class change of button (Make it red) and lower life points.
        console.log("Incorrect Button Pressed")
    }
}

console.log(questionsArray[0])

start.addEventListener("click", () => {
    quizCard.innerHTML = `
    <div class="quizContainer">
            <div class="imageContainer">
                <img src="" alt="IMAGE TO DISPLAY HERE" class="displayImage">
            </div>
            <div class="buttonContainer">
                <div class="buttonRowOne">
                    <button class="button buttonOne correctAnswer">B1C</button> <button class="button buttonTwo incorrectAnswer">B2</button>
                </div>
                <div class = "buttonRowTwo">
                    <button class="button buttonThree incorrectAnswer">B3</button> <button class="button buttonFour incorrectAnswer">B4</button> 
                </div>
            </div>
            <div class="scoreContainer">
                <div class="livesRemaining">
                    <p>OOO</p>
                </div>
                <div class="scoreTally">    
                    <p>Score:</p>
                </div>
            </div>
        </div>`
    image = document.querySelector("#displayImage");   
    answerButtons = document.querySelectorAll(".button");
    answerButtons.forEach( (button) => {
        button.addEventListener("click", () => {
                handleNextQuestion(button);
                console.log(button)
            })
    })
})




//when start button is pressed, create question 1 (deleting the start button in the process.) ->
//there should be a bottom line with a p tag, centered in the p tag (or right aligned) will be three O's
//whenever an incorrect answer is recieved a span loses an O (use if statements to determine if one has been
//already lost. When all three lives are lost reset the entire Div to a HUGE game over screen.)
//define all necessary classes.
//Define a variable called Question NUmber. This will control the arrays information positioning on succesful 
//answer clicks.


//create an array called Questions -> populate the array with your question information.



