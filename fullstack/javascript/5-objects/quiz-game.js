const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O",
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
    answer: "Pacific Ocean",
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit"],
    answer: "Central Processing Unit",
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1939", "1918"],
    answer: "1945",
  },
  {
    category: "Space",
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
]

/**
 * Function that takes an array of questions as a parameter and returns a random question object from the array.
 * @param {Array} questions Any array of questions.
 * @returns {Object} A random question object from the array.
 */
const getRandomQuestion = (questions) => {
  const randomNumber = Math.floor(Math.random() * questions.length)
  return questions[randomNumber]
}

/**
 * Function that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
 * @param {Array} choices Any array of the available choices to the selected question.
 * @returns {String} A random answer to the selected question.
 */
const getRandomComputerChoice = (choices) => {
  const randomNumber = Math.floor(Math.random() * choices.length)
  return choices[randomNumber]
}

/**
 * Function that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: **correct-answer**, where **correct-answer** is the value of the correct answer to the chosen question.
 * @param {Object} question Any question object.
 * @param {String} computerChoice Computer's choice: a random answer to the selected question.
 * @returns {String} The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: **correct-answer**, where **correct-answer** is the value of the correct answer to the chosen question.
 */
const getResults = (question, computerChoice) => {
  if (question.answer === computerChoice) {
    return `The computer's choice is correct!`
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

// --- Test Cases ---
console.log("--- QUIZ GAME ---")

const randomQuestion = getRandomQuestion(questions)
console.log(">>>Random Question", randomQuestion)

const randomAnswer = getRandomComputerChoice(randomQuestion.choices)
console.log(">>>Random Answer", randomAnswer)

console.log(getResults(randomQuestion, randomAnswer))

console.log("\n====================================")
