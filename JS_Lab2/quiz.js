// Define quiz questions and answers
const questions = [
	{
		question:
			"JavaScript supports which of the following types of variable declarations?",
		choices: ["var", "let", "const", "all of the above"],
		correctAnswer: 3, // Index of the correct answer in the choices array
	},
	{
		question:
			"Which built-in method removes the last element from an array and returns that element?",
		choices: ["pop()", "get()", "last()", "remove()"],
		correctAnswer: 0,
	},
	{
		question: "Which language used for styling web pages? ",
		choices: ["HTML", "CSS", "JQuery", "XML"],
		correctAnswer: 1,
	},
	{
		question: "Which is not a JS Framework?",
		choices: ["Angular", "JQuery", "Django", "NodeJS"],
		correctAnswer: 2,
	},
	{
		question: "Javascript is a?",
		choices: ["Language", "Programming Language", "Development", "All"],
		correctAnswer: 1,
	},
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Function to load question and choices
function loadQuestion() {
	const questionElement = document.getElementById("question");
	const choicesElements = document.querySelectorAll(".buttons button");

	questionElement.textContent = questions[currentQuestion].question;
	choicesElements.forEach((button, index) => {
		button.textContent = questions[currentQuestion].choices[index];
	});
}

// Function to check the answer
function checkAnswer(selectedIndex) {
	if (selectedIndex === questions[currentQuestion].correctAnswer) {
		score++;
	}

	currentQuestion++;
	if (currentQuestion < questions.length) {
		loadQuestion();
		updateProgress();
	} else {
		showResult();
	}
}

// Function to update progress
function updateProgress() {
	const progressElement = document.getElementById("progress");
	progressElement.textContent = `Question ${currentQuestion + 1} of ${
		questions.length
	}`;
}

// Function to display result
function showResult() {
	const quizElement = document.getElementById("quiz");
	const result = (score / questions.length) * 100;
	quizElement.innerHTML = `<h1> Result </h1>
     <h2> Your Score: ${score} out of ${questions.length} </h2>  
     <h2> Total Percentage: ${result.toFixed(2)}%</h2>`;
}

// Event listeners for choice buttons
document.querySelectorAll(".buttons button").forEach((button, index) => {
	button.addEventListener("click", () => {
		checkAnswer(index);
	});
});

// Initial loading of the first question
loadQuestion();
updateProgress();
