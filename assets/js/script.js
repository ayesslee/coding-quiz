// variables
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerELement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion, currentQuestionIndex

//start game function
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerELement.classList.remove('hide')
    setNextQuestion()
}

//next set of questions
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex++])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//resets boxes and innertext
function resetState() {
    clearStatusClass(document.body)
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
//user clicks answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'which HTML element do we put in JavaScript??',
        answers: [
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false},
            { text: '<js>', correct: false},
            { text: '<scripts>', correct: false}
        ]
    },
    {
        question: 'What can arrays in JavaScript be used to store?',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'rays', correct: false },
            { text: 'other arrays', correct: true }
        ]
    },
    {
        question: 'The first index of an array is __.',
        answers: [
            { text: '1', correct: false },
            { text: 'a', correct: false },
            { text: 'any', correct: false },
            { text: '0', correct: true }
        ]
    },
    {
        question: 'You can add a comment in JavaScript by __.',
        answers: [
            { text: '<!--Comment-->', correct: false },
            { text: '*Comment*', correct: false },
            { text: '//Comment', correct: true },
            { text: '"Comment"', correct: false }
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'alerts', correct: true },
            { text: 'booleans', correct: false },
            { text: 'numbers', correct: false }
        ]
    },
    {
        question: 'Which built-in method returns the calling string value converted to lower case?',
        answers: [
            { text: 'toLowerCase()', correct: true },
            { text: 'toLower()', correct: false },
            { text: 'changeCase(case)', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within __.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'square brackets', correct: false },
            { text: 'curly brackets', correct: false }
        ]
    }
]

