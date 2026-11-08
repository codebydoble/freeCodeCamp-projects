const questions = [
  {
    question: "What is the correct viewport meta tag required for responsive design?",
    options: [
      `meta name="viewport" content="width=device-width, initial-scale=1.0"`,
      `meta name="responsive" content="true"`,
      `meta name="viewport" content="width=100%"`,
      `meta charset="UTF-8"`,
    ],
    answer: 0,
    explanation:
      "This tells the browser to set the viewport width to the device width and initial zoom to 1. Without it, mobile browsers may render pages at desktop width.",
  },
  {
    question: "Which approach is considered best practice for responsive design today?",
    options: [
      "Desktop-first with max-width media queries",
      "Mobile-first with min-width media queries",
      "Fixed-width layouts with horizontal scroll",
      "Separate websites for mobile and desktop",
    ],
    answer: 1,
    explanation:
      "Mobile-first means writing base styles for small screens and progressively enhancing with min-width media queries. This is the modern recommended approach.",
  },
  {
    question: "What does the CSS box model consist of (from inside out)?",
    options: [
      "Margin → Border → Padding → Content",
      "Content → Padding → Border → Margin",
      "Padding → Content → Border → Margin",
      "Content → Margin → Padding → Border",
    ],
    answer: 1,
    explanation: "The standard box model order is: content, then padding, then border, then margin (outside).",
  },
  {
    question: "Which property makes an element include padding and border in its total width/height?",
    options: ["box-sizing: content-box", "box-sizing: border-box", "display: border-box", "width: border-box"],
    answer: 1,
    explanation:
      "box-sizing: border-box is the modern preferred value. Many developers apply it globally with the universal selector.",
  },
  {
    question: "Flexbox is primarily designed for which type of layout?",
    options: [
      "Two-dimensional (rows and columns at the same time)",
      "One-dimensional (either a row or a column)",
      "Only vertical stacking",
      "Only grid-based magazine layouts",
    ],
    answer: 1,
    explanation: "Flexbox is a one-dimensional layout method. CSS Grid is the tool designed for true two-dimensional layouts.",
  },
  {
    question: "Which Flexbox property controls alignment along the main axis?",
    options: ["align-items", "justify-content", "flex-direction", "align-content"],
    answer: 1,
    explanation: "justify-content aligns items along the main axis. align-items works on the cross axis.",
  },
  {
    question: "What is the most flexible modern way to create a responsive grid of cards?",
    options: [
      "float: left with percentage widths",
      "display: flex with flex-wrap",
      "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))",
      "position: absolute on every card",
    ],
    answer: 2,
    explanation:
      "Using auto-fit (or auto-fill) with minmax() creates a responsive grid that automatically adjusts the number of columns based on available space — often without needing media queries.",
  },
  {
    question: "Which HTML element is the most appropriate for the main navigation of a site?",
    options: ['<div class="nav">', "<navigation>", "<nav>", "<menu>"],
    answer: 2,
    explanation: "<nav> is the semantic HTML5 element specifically intended for major navigation blocks.",
  },
  {
    question: "Why is heading hierarchy (h1 → h2 → h3…) important?",
    options: [
      "It only affects visual size",
      "It helps screen readers and search engines understand document structure",
      "Browsers require strict order or the page won’t load",
      "It is required for CSS Grid to work",
    ],
    answer: 1,
    explanation:
      "Proper heading hierarchy creates a logical outline that assistive technologies and search engines use to understand the page structure.",
  },
  {
    question: "What does the 'sizes' attribute on an <img> tag work together with?",
    options: [
      "The alt attribute only",
      "srcset to help the browser choose the right image source",
      "CSS media queries exclusively",
      'The loading="lazy" attribute',
    ],
    answer: 1,
    explanation:
      "srcset provides the possible image sources and their widths; sizes tells the browser how wide the image will be displayed under different conditions so it can pick the best file.",
  },
  {
    question: "Which media feature is used to detect if the user prefers a dark color scheme?",
    options: ["prefers-color-scheme: dark", "color-scheme: dark", "theme: dark", "dark-mode: true"],
    answer: 0,
    explanation: "The media feature prefers-color-scheme: dark (or light) lets you adapt styles to the user’s system preference.",
  },
  {
    question: "What is the recommended unit for scalable typography that respects user font-size settings?",
    options: ["px", "pt", "rem", "cm"],
    answer: 2,
    explanation: "rem is relative to the root element’s font-size. It scales better for accessibility than fixed px values.",
  },
  {
    question: "Which of the following is a key principle of accessible forms?",
    options: [
      "Using placeholder text instead of labels",
      "Associating <label> elements with form controls via the for/id attributes",
      "Hiding all labels with CSS for a cleaner look",
      "Using only divs and spans for inputs",
    ],
    answer: 1,
    explanation:
      "Properly associated labels are essential for screen reader users and also improve click/tap targets for everyone.",
  },
  {
    question: "What does the CSS clamp() function allow you to do?",
    options: [
      "Limit an element to a maximum of three children",
      "Set a value that scales between a minimum and maximum",
      "Force an element to stay inside the viewport",
      "Clamp the z-index of positioned elements",
    ],
    answer: 1,
    explanation:
      "clamp(min, preferred, max) is perfect for fluid typography and spacing that scales with the viewport while staying within safe bounds.",
  },
  {
    question: "In a mobile-first stylesheet, which media query correctly targets tablet-sized screens and larger?",
    options: [
      "@media (max-width: 768px)",
      "@media (min-width: 768px)",
      "@media (width: 768px)",
      "@media screen and (max-device-width: 768px)",
    ],
    answer: 1,
    explanation:
      "With a mobile-first approach you write base styles for small screens and then use min-width queries to add styles for larger viewports.",
  },
  {
    question:
      "Which CSS property is most commonly used to create spacing between flex or grid items without using margins on the children?",
    options: ["padding", "gap", "margin-block", "column-gap only"],
    answer: 1,
    explanation:
      "The gap property (and its row-gap / column-gap longhands) is the modern, clean way to create consistent spacing in Flexbox and Grid layouts.",
  },
  {
    question: "What is the primary purpose of the <main> element?",
    options: [
      "To wrap the entire page content including header and footer",
      "To contain the dominant content of the <body>, excluding repeated content like navigation or footers",
      "To replace the <body> tag",
      "To hold only the largest heading on the page",
    ],
    answer: 1,
    explanation:
      "There should typically be only one <main> per page. It helps assistive technologies skip directly to the primary content.",
  },
  {
    question: "Which technique helps images scale fluidly within their containers?",
    options: [
      "width: 100% and height: auto (or max-width: 100%)",
      "position: absolute with fixed pixel values",
      "float: left only",
      "Using only background-image with no width control",
    ],
    answer: 0,
    explanation: "Setting max-width: 100% (and height: auto) is the classic and still essential technique for fluid images.",
  },
  {
    question: "What does ARIA stand for and when should you reach for it?",
    options: [
      "Accessible Rich Internet Applications — use it only when native HTML semantics are insufficient",
      "Advanced Responsive Image Attributes — use it on every image",
      "Automatic Responsive Interface Adjustments — browsers apply it automatically",
      "Always Required Interactive Attributes — add it to every interactive element",
    ],
    answer: 0,
    explanation:
      "The first rule of ARIA is: don’t use ARIA if you can use a native HTML element with the right semantics instead.",
  },
  {
    question: "Which of the following is a good example of a CSS custom property (variable)?",
    options: [
      "$primary-color: #38bdf8;",
      "--primary-color: #38bdf8;",
      "var primary-color = #38bdf8;",
      "@primary-color: #38bdf8;",
    ],
    answer: 1,
    explanation:
      "CSS custom properties are defined with a double hyphen (--) and consumed with the var() function. They are native CSS (unlike Sass/SCSS variables).",
  },
]

// State
let currentIndex = 0
let score = 0
let answered = false
let userAnswers = [] // store selected index or null

// DOM refs
const startScreen = document.getElementById("start-screen")
const quizArea = document.getElementById("quiz-area")
const resultsScreen = document.getElementById("results")
const startBtn = document.getElementById("start-btn")
const nextBtn = document.getElementById("next-btn")
const restartBtn = document.getElementById("restart-btn")
const reviewBtn = document.getElementById("review-btn")
const qNumber = document.getElementById("q-number")
const qText = document.getElementById("q-text")
const optionsEl = document.getElementById("options")
const feedbackEl = document.getElementById("feedback")
const progressFill = document.getElementById("progress-fill")
const progressText = document.getElementById("progress-text")
const scoreLive = document.getElementById("score-live")

function startQuiz() {
  currentIndex = 0
  score = 0
  answered = false
  userAnswers = new Array(questions.length).fill(null)
  startScreen.style.display = "none"
  resultsScreen.classList.remove("show")
  quizArea.style.display = "block"
  renderQuestion()
}

function renderQuestion() {
  const q = questions[currentIndex]
  answered = false
  nextBtn.disabled = true
  nextBtn.textContent = currentIndex === questions.length - 1 ? "See Results" : "Next Question"

  qNumber.textContent = `Question ${currentIndex + 1}`
  qText.textContent = q.question
  progressText.textContent = `Question ${currentIndex + 1} of ${questions.length}`
  progressFill.style.width = `${(currentIndex / questions.length) * 100}%`
  scoreLive.textContent = `Score: ${score}`

  feedbackEl.className = "feedback"
  feedbackEl.innerHTML = ""

  optionsEl.innerHTML = ""
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button")
    btn.className = "option"
    btn.innerHTML = `
          <span class="option-letter">${String.fromCharCode(65 + i)}</span>
          <span class="option-text">${opt}</span>
        `
    btn.addEventListener("click", () => selectOption(i, btn))
    optionsEl.appendChild(btn)
  })
}

function selectOption(selectedIndex, btnEl) {
  if (answered) return
  answered = true
  nextBtn.disabled = false

  const q = questions[currentIndex]
  const isCorrect = selectedIndex === q.answer
  userAnswers[currentIndex] = selectedIndex

  if (isCorrect) {
    score++
    scoreLive.textContent = `Score: ${score}`
  }

  // Mark all options
  const optionButtons = optionsEl.querySelectorAll(".option")
  optionButtons.forEach((btn, i) => {
    btn.classList.add("disabled")
    if (i === q.answer) {
      btn.classList.add("correct")
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add("incorrect")
    }
  })

  // Feedback
  feedbackEl.classList.add("show", isCorrect ? "correct" : "incorrect")
  feedbackEl.innerHTML = `
        <strong>${isCorrect ? "✓ Correct!" : "✗ Incorrect"}</strong>
        ${q.explanation}
      `
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++
    renderQuestion()
    // scroll to top of quiz card on mobile
    document.getElementById("quiz-card").scrollIntoView({ behavior: "smooth", block: "start" })
  } else {
    showResults()
  }
}

function showResults() {
  quizArea.style.display = "none"
  resultsScreen.classList.add("show")

  const percent = Math.round((score / questions.length) * 100)
  document.getElementById("final-score").textContent = percent + "%"
  document.getElementById("score-circle").style.setProperty("--score", percent)
  document.getElementById("stat-correct").textContent = score
  document.getElementById("stat-wrong").textContent = questions.length - score
  document.getElementById("stat-percent").textContent = percent + "%"

  let title, message
  if (percent >= 90) {
    title = "Outstanding!"
    message = `You scored ${score} out of ${questions.length}. You have a strong grasp of modern responsive techniques.`
  } else if (percent >= 70) {
    title = "Well done!"
    message = `You scored ${score} out of ${questions.length}. Solid understanding — review the missed topics to reach mastery.`
  } else if (percent >= 50) {
    title = "Good effort!"
    message = `You scored ${score} out of ${questions.length}. Keep practicing Flexbox, Grid, and mobile-first patterns.`
  } else {
    title = "Keep going!"
    message = `You scored ${score} out of ${questions.length}. Revisit the study guide and try the quiz again.`
  }
  document.getElementById("result-title").textContent = title
  document.getElementById("result-message").textContent = message
}

function restartQuiz() {
  resultsScreen.classList.remove("show")
  startQuiz()
}

// Simple review: just restart for now (can be expanded later)
function reviewAnswers() {
  // For a lightweight version we restart and let the user go through again.
  // A full review mode can be added later if desired.
  restartQuiz()
}

// Event listeners
startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextQuestion)
restartBtn.addEventListener("click", restartQuiz)
reviewBtn.addEventListener("click", reviewAnswers)
