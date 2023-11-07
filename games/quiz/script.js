const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        //1
        question: "Which of these materials cannot be recycled?",
        options: ["Metals", "Plastic Bottles", "Paper and Cardboard", "Light Bulbs"],
        correctAnswer: "Light Bulbs",
        feedback: "Because we can't separate the materials that make a light bulb, we cannot recycle them. In addition, some light bulbs contain mercury a heavy (dangerous) metal"
    },
    {
        //2
        question: "Which of these is a renewable energy resource?",
        options: ["Coal", "Nuclear Enegy", "Natural Gas", "Wind Energy"],
        correctAnswer: "Wind Energy",
        feedback: "Renewable energy sources are those abundant and continually renovating in nature, like the wind!"
    },
    {
        //3
        question: "Which of the following will help you to save water?",
        options: ["Close taps properly", "Flush the toilet 3 times", "Take Long showers", "Leaave the faucet on while you brush your teeth"],
        correctAnswer: "Close taps properly",
        feedback: "We must make sure there are no leakages in our houses and use as little water as possible: flush only once, take shorter showers, and close the faucet when brushing your teeth!"
    },
    {
        //4
        question: "Which is the most eco-friendly mode of transportation?",
        options: ["Cycle", "Bus", "Motorcycle", "Car"],
        correctAnswer: "Cycle",
        feedback: "Instead of burning fossil fuels that pollute and heat our planet, when we cycle we are only burning calories."
    },
    {
        //5
        question: "Which day is Earth Day?",
        options: ["March 12", "October 2", "April 22", "May 9"],
        correctAnswer: "April 22",
        feedback: "The Earth Day is a day to remind us of the importance of adopting more eco-friendly lifestyles. Although it is celebrated on April 22nd, Earth Day is actually everyday!"
    },
    {
        //6
        question: "Which of the following is a greenhouse gas?",
        options: ["CO2", "CH4", "N2O", "All of the above"],
        correctAnswer: "All of the above",
        feedback: "All of these gases trap the Sun’s heat in the atmosphere! And increase the temprature of Earth"
    },
    {
        //7
        question: "Which of these countries emits the most carbon dioxide?",
        options: ["China", "Russia", "USA", "Australia"],
        correctAnswer: "China",
        feedback: "As China is growing fast and burns a lot of coal (a fossil fuel), it produces loads of carbon dioxide."
    },
    {
        //8
        question: "How long does a Styrofoam cup take to decompose?",
        options: ["50 years", "100 years", "300 years", "500 years"],
        correctAnswer: "500 years",
        feedback: "Nature cannot degrade Styrofoam quickly and we cannot recycle this material! It is always better to refuse Styrofoam cups!"
    },
    {
        //9
        question: "What is the most common type of trash that litters our oceans?",
        options: ["Cigarettes", "Plastic Bags", "Beverage plastic bottles", "Straws/Stirrers"],
        correctAnswer: "Cigarettes",
        feedback: "Humans throw a lot of cigarettes everywhere and these end up in the ocean. In any case, there are loads of plastic bags and bottles, straws, and stirrers in the ocean as well!"
    },
    {
        //10
        question: "How long does it take for a glass bottle or jar to decompose?",
        options: ["100 years", "4,000 years", "10,000 years", "40,000 years"],
        correctAnswer: "40,000 years",
        feedback: "A glass bottle will take 40 centuries to decompose if it isn’t recycled. Recycling a single glass bottle or jar will save enough energy to power a light bulb for four hours."
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
