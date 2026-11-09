/**
 * Responsive Design Helpers & Interactive Study Utilities
 * For HTML/CSS/Responsive Design study guide
 * Compatible with freeCodeCamp projects + Google web.dev practices
 */

// ============================================
// 1. Viewport & Breakpoint Utilities
// ============================================

/**
 * Get current viewport width
 */
export function getViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

/**
 * Common modern breakpoints (mobile-first)
 */
export const BREAKPOINTS = {
  sm: 640,   // small phones landscape / large phones
  md: 768,   // tablets
  lg: 1024,  // small laptops
  xl: 1280,  // desktops
  '2xl': 1536
};

/**
 * Check if current viewport matches a breakpoint (min-width style)
 */
export function matchesBreakpoint(bp) {
  const width = typeof bp === 'number' ? bp : BREAKPOINTS[bp];
  return getViewportWidth() >= width;
}

/**
 * Get current breakpoint name
 */
export function getCurrentBreakpoint() {
  const width = getViewportWidth();
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

// ============================================
// 2. Responsive Image Helper (srcset generator)
// ============================================

/**
 * Generate srcset string for responsive images
 * @param {string} basePath - e.g. '/images/hero'
 * @param {number[]} widths - e.g. [400, 800, 1200]
 * @param {string} ext - 'jpg' or 'webp'
 */
export function generateSrcset(basePath, widths = [400, 800, 1200, 1600], ext = 'jpg') {
  return widths
    .map(w => `${basePath}-${w}w.${ext} ${w}w`)
    .join(', ');
}

// Example usage in HTML:
// <img 
//   src="/images/hero-800w.jpg"
//   srcset={generateSrcset('/images/hero')}
//   sizes="(max-width: 768px) 100vw, 50vw"
//   alt="Description"
// >

// ============================================
// 3. Media Query Listener (for JS-driven responsive behavior)
// ============================================

/**
 * Watch a media query and run callbacks
 * @param {string} query - e.g. '(min-width: 768px)'
 * @param {Function} onMatch
 * @param {Function} onUnmatch
 */
export function watchMediaQuery(query, onMatch, onUnmatch) {
  const mql = window.matchMedia(query);
  
  const handler = (e) => {
    if (e.matches) {
      onMatch && onMatch(e);
    } else {
      onUnmatch && onUnmatch(e);
    }
  };

  // Initial check
  handler(mql);

  // Listen for changes
  mql.addEventListener('change', handler);

  // Return cleanup function
  return () => mql.removeEventListener('change', handler);
}

// Example:
// const stop = watchMediaQuery('(min-width: 768px)', 
//   () => console.log('Desktop mode'),
//   () => console.log('Mobile mode')
// );

// ============================================
// 4. Theme Detection (prefers-color-scheme)
// ============================================

export function getPreferredTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function watchThemeChange(callback) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = (e) => callback(e.matches ? 'dark' : 'light');
  mql.addEventListener('change', handler);
  return () => mql.removeEventListener('change', handler);
}

// ============================================
// 5. Simple Interactive Quiz Data (for study)
// ============================================

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the correct viewport meta tag for responsive design?",
    options: [
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta name="responsive" content="true">',
      '<meta name="viewport" content="width=100%">',
      '<meta charset="UTF-8">'
    ],
    answer: 0,
    explanation: "This tells the browser to match the device width and set initial zoom to 1."
  },
  {
    id: 2,
    question: "Which CSS layout is best for one-dimensional (row or column) arrangements?",
    options: ["CSS Grid", "Flexbox", "Floats", "Position absolute"],
    answer: 1,
    explanation: "Flexbox is designed for 1D layouts. Grid is for 2D."
  },
  {
    id: 3,
    question: "What does 'mobile-first' mean?",
    options: [
      "Design only for mobile phones",
      "Write base styles for mobile, then enhance with min-width media queries",
      "Use max-width media queries starting from desktop",
      "Ignore tablets"
    ],
    answer: 1,
    explanation: "Mobile-first starts with the smallest screen and progressively enhances."
  },
  {
    id: 4,
    question: "Which unit is preferred for scalable typography?",
    options: ["px", "pt", "rem", "cm"],
    answer: 2,
    explanation: "rem is relative to the root font-size and scales better for accessibility."
  },
  {
    id: 5,
    question: "What CSS feature allows a grid to automatically create columns based on available space?",
    options: [
      "grid-template-columns: 1fr 1fr 1fr",
      "repeat(auto-fit, minmax(250px, 1fr))",
      "flex-wrap: wrap",
      "float: left"
    ],
    answer: 1,
    explanation: "auto-fit + minmax creates a responsive grid without media queries in many cases."
  }
];

/**
 * Simple quiz runner (console or DOM)
 */
export function runQuiz(questions = QUIZ_QUESTIONS) {
  console.log("=== Responsive Design Quick Quiz ===\n");
  let score = 0;

  questions.forEach((q, index) => {
    console.log(`${index + 1}. ${q.question}`);
    q.options.forEach((opt, i) => {
      console.log(`   ${String.fromCharCode(65 + i)}. ${opt}`);
    });
    // In a real interactive version, prompt for answer
    // For study, answers are in the data
  });

  console.log("\nAnswers & Explanations:");
  questions.forEach((q, index) => {
    console.log(`${index + 1}. Correct: ${String.fromCharCode(65 + q.answer)}`);
    console.log(`   ${q.explanation}\n`);
  });
}

// ============================================
// 6. Utility: Clamp for fluid typography
// ============================================

/**
 * Generate a CSS clamp() value for fluid sizing
 * @param {string} min - e.g. '1rem'
 * @param {string} preferred - e.g. '2.5vw'
 * @param {string} max - e.g. '2rem'
 */
export function fluidSize(min, preferred, max) {
  return `clamp(${min}, ${preferred}, ${max})`;
}

// Usage in CSS:
// font-size: ${fluidSize('1rem', '2.5vw', '2rem')};

// ============================================
// Export for browser or module use
// ============================================

if (typeof window !== 'undefined') {
  window.ResponsiveHelpers = {
    getViewportWidth,
    BREAKPOINTS,
    matchesBreakpoint,
    getCurrentBreakpoint,
    generateSrcset,
    watchMediaQuery,
    getPreferredTheme,
    watchThemeChange,
    QUIZ_QUESTIONS,
    runQuiz,
    fluidSize
  };
}

console.log("Responsive Helpers loaded. Try: ResponsiveHelpers.runQuiz()");
