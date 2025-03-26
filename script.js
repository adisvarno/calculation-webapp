// Get references to elements
const problemText = document.getElementById('problemText');
const answerInput = document.getElementById('answerInput');
const feedbackText = document.getElementById('feedbackText');
const generateButton = document.getElementById('generateButton');
const difficultySelect = document.getElementById('difficultySelect');
const timerSwitch = document.getElementById('timerSwitch');
const timerDisplay = document.getElementById('timerDisplay');

// Global variables
let number1, number2, correctAnswer;
let timer;
let timeLeft = 10; // Default time for the timer (in seconds)

// Function to generate a new problem
function generateProblem() {
    // Get the current difficulty
    const difficulty = parseInt(difficultySelect.value);

    // Generate two random numbers based on the difficulty level
    number1 = Math.floor(Math.random() * difficulty) + 1;
    number2 = Math.floor(Math.random() * difficulty) + 1;
    correctAnswer = number1 * number2;

    // Display the problem
    problemText.textContent = `${number1} x ${number2}`;

    // Clear the input and feedback
    answerInput.value = '';
    feedbackText.textContent = '';

    // Reset the timer if enabled
    if (timerSwitch.checked) {
        timeLeft = 10; // Reset timer to 10 seconds
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        startTimer();
    }
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct!';
        feedbackText.style.color = 'green';
    } else {
        feedbackText.textContent = 'Incorrect, try again!';
        feedbackText.style.color = 'red';
    }
}

// Function to start the timer
function startTimer() {
    if (timer) clearInterval(timer); // Clear any existing timer

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        } else {
            clearInterval(timer);
            feedbackText.textContent = 'Time is up! Try again.';
            feedbackText.style.color = 'red';
        }
    }, 1000);
}

// Event listeners
generateButton.addEventListener('click', () => {
    checkAnswer();
    generateProblem();
});

// Initial problem generation
generateProblem();
