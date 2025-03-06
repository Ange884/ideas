let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 10;

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const startButton = document.getElementById("start-button");
const quizContainer = document.querySelector(".quiz");
const timerEl = document.createElement("p");
timerEl.id = "timer";
document.querySelector(".app").appendChild(timerEl);

const questions = [
    {
        question: "which is the largest desert in the world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ] 
    },
    
        {
            "question": "What is the capital of France?",
            "answers": [
                {"text": "Berlin", "correct": false},
                {"text": "Madrid", "correct": false},
                {"text": "Paris", "correct": true},
                {"text": "Rome", "correct": false}
            ]
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "answers": [
                {"text": "Venus", "correct": false},
                {"text": "Mars", "correct": true},
                {"text": "Jupiter", "correct": false},
                {"text": "Saturn", "correct": false}
            ]
        },
        {
            "question": "What is the chemical symbol for Gold?",
            "answers": [
                {"text": "Ag", "correct": false},
                {"text": "Au", "correct": true},
                {"text": "Pb", "correct": false},
                {"text": "Fe", "correct": false}
            ]
        },
        {
            "question": "Who wrote 'Hamlet'?",
            "answers": [
                {"text": "Charles Dickens", "correct": false},
                {"text": "William Shakespeare", "correct": true},
                {"text": "Jane Austen", "correct": false},
                {"text": "Mark Twain", "correct": false}
            ]
        },
        {
            "question": "What is the powerhouse of the cell?",
            "answers": [
                {"text": "Nucleus", "correct": false},
                {"text": "Ribosome", "correct": false},
                {"text": "Mitochondria", "correct": true},
                {"text": "Chloroplast", "correct": false}
            ]
        },
        {
            "question": "Which is the longest river in the world?",
            "answers": [
                {"text": "Amazon River", "correct": false},
                {"text": "Nile River", "correct": true},
                {"text": "Yangtze River", "correct": false},
                {"text": "Mississippi River", "correct": false}
            ]
        },
        {
            "question": "How many bones are there in an adult human body?",
            "answers": [
                {"text": "206", "correct": true},
                {"text": "180", "correct": false},
                {"text": "220", "correct": false},
                {"text": "195", "correct": false}
            ]
        },
        {
            "question": "Which is the smallest country in the world?",
            "answers": [
                {"text": "Monaco", "correct": false},
                {"text": "Vatican City", "correct": true},
                {"text": "Liechtenstein", "correct": false},
                {"text": "San Marino", "correct": false}
            ]
        },
        {
            "question": "What is the square root of 64?",
            "answers": [
                {"text": "6", "correct": false},
                {"text": "7", "correct": false},
                {"text": "8", "correct": true},
                {"text": "9", "correct": false}
            ]
        },
        {
            "question": "Which ocean is the largest?",
            "answers": [
                {"text": "Atlantic Ocean", "correct": false},
                {"text": "Indian Ocean", "correct": false},
                {"text": "Pacific Ocean", "correct": true},
                {"text": "Arctic Ocean", "correct": false}
            ]
        }
    ]; 

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    startTimer();
    let q = questions[currentQuestionIndex];
    questionEl.innerText = q.question;
    answerButtons.innerHTML = "";
    
    q.answers.forEach(ans => {
        let btn = document.createElement("button");
        btn.innerText = ans.text;
        btn.classList.add("btn");
        btn.onclick = () => selectAnswer(ans.correct, btn);
        answerButtons.appendChild(btn);
    });
    
    nextButton.style.display = "none";
}

function selectAnswer(correct, btn) {
    if (correct) {
        btn.classList.add("correct");
        score++;
        clearInterval(timer);
        disableButtons();
        nextButton.style.display = "inline-block";
    } else {
        btn.classList.add("incorrect");
        btn.disabled = true;
    }
}

function disableButtons() {
    document.querySelectorAll('.btn').forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    let timeLeft = timeLimit;
    timerEl.innerText = `Time: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = `Time: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            disableButtons();
            nextButton.style.display = "inline-block";
        }
    }, 1000);
}

function endQuiz() {
    alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    quizContainer.style.display = "none";
    startButton.style.display = "inline-block";
}

startButton.onclick = startQuiz;
nextButton.onclick = nextQuestion;
