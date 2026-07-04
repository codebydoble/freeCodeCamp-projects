/**
 * freeCodeCamp — Chapter 5: Objects
 * Exercises reviewed and fixed
 * Author: Yoandy Doble Herrera
 * Reviewed by: Claude
 *
 * EXERCISES:
 * 1. Cargo Manifest Validator  — 26/30 (3 bugs fixed)
 * 2. Quiz Game                 — 30/30 (perfect)
 * 3. Record Collection         — 28/30 (1 minor cleanup)
 *
 * REACT CONNECTION (read this):
 * These three exercises are React patterns in disguise:
 *   normalizeUnits  → immutable state updates (spread + return new)
 *   validateManifest → form validation (errors object pattern)
 *   updateRecords   → useReducer (state + action → new state)
 */

// ═══════════════════════════════════════════════
// EXERCISE 1 — Cargo Manifest Validator
// ═══════════════════════════════════════════════

// --- Test data ---
const manifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
}
const validManifest = {
  containerId: 2,
  destination: "Queretaro, Queretaro, MX",
  weight: 1000,
  unit: "kg",
  hazmat: true,
}
const invalidManifest = {
  containerId: 3,    // missing: destination; invalid: weight (string)
  weight: "500",
  unit: "kg",
  hazmat: true,
}

// ── normalizeUnits (10/10 ✓) ──────────────────
/**
 * Converts a manifest's weight to kilograms.
 * Never mutates the original — always returns a new object.
 * @param {Object} manifest cargo manifest object.
 * @returns {Object} new manifest with weight in kg.
 */
const normalizeUnits = (manifest) => {
  // Spread creates a shallow copy — original is safe
  let normalizedManifest = { ...manifest }
  if (normalizedManifest.unit === "lb") {
    normalizedManifest.weight = normalizedManifest.weight * 0.45
    normalizedManifest.unit = "kg"
  }
  return normalizedManifest
}

console.log("=== Exercise 1: normalizeUnits ===")
console.log(normalizeUnits(manifest))     // weight: 373.95, unit: "kg"
console.log(normalizeUnits(validManifest)) // unchanged (already kg)
console.log("Original untouched:", manifest.unit) // "lb" — immutable ✓

// ── validateManifest (8/10 → Fixed) ──────────
/**
 * Validates all required manifest properties.
 * Returns {} if valid, or { field: "Missing"|"Invalid" } for each problem.
 *
 * BUGS FIXED:
 * 1. containerId: < 0 → <= 0 (spec: positive integer, 0 is not positive)
 * 2. containerId: added Number.isInteger() (1.5 is not a valid integer ID)
 *
 * @param {Object} manifest cargo manifest object.
 * @returns {Object} empty if valid, error map if not.
 */
const validateManifest = (manifest) => {
  const requiredKeys = ["containerId", "destination", "weight", "unit", "hazmat"]
  let errors = {}

  for (const key of requiredKeys) {
    if (!(key in manifest)) {
      errors[key] = "Missing"
      continue
    }

    switch (key) {
      case "containerId":
        // FIX: was (< 0) — 0 is not a positive integer
        if (
          typeof manifest[key] !== "number" ||
          !Number.isInteger(manifest[key]) ||  // must be integer, not float
          manifest[key] <= 0                   // must be POSITIVE (> 0)
        ) {
          errors[key] = "Invalid"
        }
        break

      case "destination":
        if (
          typeof manifest[key] !== "string" ||
          manifest[key].trim() === ""  // trim() is cleaner than replacing all whitespace
        ) {
          errors[key] = "Invalid"
        }
        break

      case "weight":
        if (typeof manifest[key] !== "number" || manifest[key] <= 0) {
          errors[key] = "Invalid"
        }
        break

      case "unit":
        if (
          typeof manifest[key] !== "string" ||
          (manifest[key] !== "kg" && manifest[key] !== "lb")
        ) {
          errors[key] = "Invalid"
        }
        break

      case "hazmat":
        if (typeof manifest[key] !== "boolean") {
          errors[key] = "Invalid"
        }
        break
    }
  }
  return errors
}

console.log("\n=== Exercise 2: validateManifest ===")
console.log(validateManifest(manifest))        // {} — valid
console.log(validateManifest(validManifest))   // {} — valid
console.log(validateManifest(invalidManifest)) // { destination: "Missing", weight: "Invalid" }
console.log(validateManifest({ ...manifest, containerId: 0 }))   // { containerId: "Invalid" } ✓ fixed
console.log(validateManifest({ ...manifest, containerId: 1.5 })) // { containerId: "Invalid" } ✓ fixed

// ── processManifest (8/10 → Fixed) ───────────
/**
 * Processes a manifest: validates it and logs the result.
 *
 * BUGS FIXED:
 * 1. Spec requires TWO separate console.log() calls per branch
 * 2. ${errors} in template literal prints "[object Object]"
 *    Fix: log the object directly in the second console.log()
 * 3. validateManifest() was called 3 times — now called once and stored
 *
 * @param {Object} manifest cargo manifest object.
 * @returns {String} validation result message.
 */
const processManifest = (manifest) => {
  const errors = validateManifest(manifest)   // call ONCE, store result
  const isValid = Object.keys(errors).length === 0

  if (isValid) {
    const normalized = normalizeUnits(manifest)
    console.log(`Validation success: ${manifest.containerId}`)   // log 1
    console.log(`Total weight: ${normalized.weight} kg`)          // log 2 ← spec requires this separately
    return `Validation success: ${manifest.containerId} Total weight: ${normalized.weight} kg`
  } else {
    console.log(`Validation error: ${manifest.containerId}`)      // log 1
    console.log(errors)                                            // log 2 ← logs the object properly (not [object Object])
    return `Validation error: ${manifest.containerId}`
  }
}

console.log("\n=== Exercise 3: processManifest ===")
processManifest(manifest)         // success
processManifest(validManifest)    // success
processManifest(invalidManifest)  // error


// ═══════════════════════════════════════════════
// EXERCISE 2 — Quiz Game (30/30 ✓ — perfect)
// ═══════════════════════════════════════════════

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
 * Returns a random question from the array.
 * @param {Array} questions array of question objects.
 * @returns {Object} random question object.
 */
const getRandomQuestion = (questions) =>
  questions[Math.floor(Math.random() * questions.length)]

/**
 * Returns a random choice from the choices array.
 * @param {Array} choices array of choice strings.
 * @returns {String} random choice.
 */
const getRandomComputerChoice = (choices) =>
  choices[Math.floor(Math.random() * choices.length)]

/**
 * Evaluates whether the computer's choice is correct.
 * @param {Object} question question object with answer property.
 * @param {String} computerChoice the computer's selected answer.
 * @returns {String} result message.
 */
const getResults = (question, computerChoice) =>
  question.answer === computerChoice
    ? `The computer's choice is correct!`
    : `The computer's choice is wrong. The correct answer is: ${question.answer}`

console.log("\n=== Quiz Game ===")
const randomQuestion = getRandomQuestion(questions)
const randomAnswer = getRandomComputerChoice(randomQuestion.choices)
console.log("Question:", randomQuestion.question)
console.log("Computer chose:", randomAnswer)
console.log(getResults(randomQuestion, randomAnswer))

// Verify all answers are in their choices (data integrity check)
const allValid = questions.every((q) => q.choices.includes(q.answer))
console.log("All answers in choices:", allValid) // true ✓


// ═══════════════════════════════════════════════
// EXERCISE 3 — Record Collection (28/30 → Cleaned)
// ═══════════════════════════════════════════════

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
}

/**
 * Updates a record in the collection based on the given prop and value.
 * Rules:
 *   - Empty value → delete the prop
 *   - Non-tracks prop + value → set prop to value
 *   - tracks prop + value, no tracks array → create array and push value
 *   - tracks prop + value, tracks exists → push value
 *
 * CLEANUP: removed internal console.logs (spec only requires returning records)
 * CLEANUP: removed redundant 'prop in records[id]' check before delete
 *          (delete on non-existent key is silently ignored in JS)
 *
 * @param {Object} records the full record collection.
 * @param {Number} id album ID.
 * @param {String} prop property name to update.
 * @param {String} value new value ("" to delete).
 * @returns {Object} the updated records object.
 */
const updateRecords = (records, id, prop, value) => {
  if (!value) {
    // Empty string → delete property (delete on missing key is a no-op)
    delete records[id][prop]
  } else if (prop !== "tracks") {
    // Any non-tracks prop → assign directly
    records[id][prop] = value
  } else {
    // tracks prop → create if missing, then push
    if (!records[id][prop]) records[id][prop] = []
    records[id][prop].push(value)
  }
  return records
}

console.log("\n=== Record Collection ===")

// US2: delete prop with empty string
console.log(updateRecords(recordCollection, 1245, "artist", ""))
// US3: add non-tracks prop
console.log(updateRecords(recordCollection, 5439, "year", "1988"))
// US4+5: add track (creates array since 5439 has no tracks)
console.log(updateRecords(recordCollection, 5439, "tracks", "ABBA Ultimate"))
// US5: append to existing tracks
console.log(updateRecords(recordCollection, 2548, "tracks", "New Song"))


// ═══════════════════════════════════════════════
// REACT CONNECTION — why these exercises matter
// ═══════════════════════════════════════════════
/*
  normalizeUnits pattern → immutable state update in React:
    const [state, setState] = useState(initialManifest)
    const handleNormalize = () => setState(normalizeUnits(state))
    // spread + return new = the ONLY safe way to update React state

  validateManifest pattern → form validation in React:
    const [errors, setErrors] = useState({})
    const handleSubmit = () => {
      const errs = validateManifest(formData)
      setErrors(errs)
      if (Object.keys(errs).length === 0) submitForm()
    }

  updateRecords pattern → useReducer in React:
    const reducer = (state, action) => {
      // action.type, action.id, action.prop, action.value
      return updateRecords({ ...state }, action.id, action.prop, action.value)
    }
    const [records, dispatch] = useReducer(reducer, recordCollection)
    // This is exactly how Redux works
*/
