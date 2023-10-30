const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
        feedback: "Paris is the correct answer. It's the capital of France."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Mars",
        feedback: "Mars is the Red Planet. That's the right answer."
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: "Blue Whale",
        feedback: "You got it right! The Blue Whale is the largest mammal."
    },
];

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
});


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resetState(); // Call resetState first
    showQuestion(questions[currentQuestionIndex]);
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.options.forEach((option, index) => {
        optionButtons[index].innerText = option;
        optionButtons[index].addEventListener("click", () => {
            checkAnswer(index, question);
            showFeedback(question);
        });
    });
}

function resetState() {
    optionButtons.forEach((button) => {
        button.classList.remove("correct", "incorrect");
        button.style.backgroundColor = "#fff"; // Reset background color to its default
        button.style.color = "#001e4d";
    });
    nextButton.style.display = "none";
}

function checkAnswer(selectedOptionIndex, question) {
    const selectedOption = optionButtons[selectedOptionIndex];
    if (selectedOption.innerText === question.correctAnswer) {
        score++;
        selectedOption.classList.add("correct");
        selectedOption.style.backgroundColor = "#90EE90";
        selectedOption.style.color = "#001e4d";
    } else {
        selectedOption.classList.add("incorrect");
        selectedOption.style.backgroundColor = "#ff6961";
        selectedOption.style.color = "#000"; // Change background color to red for incorrect answer
    }
    optionButtons.forEach((button, index) => {
        if (index !== selectedOptionIndex && button.innerText !== question.correctAnswer) {
            button.style.backgroundColor = "#fff"; // Reset background color of unselected options and correct answers
        }
    });
    nextButton.style.display = "block";
}

function showFeedback(question) {
    questionElement.innerText = question.feedback;
}

function showResults() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    optionButtons.forEach((button) => {
        button.style.display = "none";
    });
    nextButton.innerText = "Restart";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();
