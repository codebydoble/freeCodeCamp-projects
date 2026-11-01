/**
 * ========================================
 * EXAM 3: JAVASCRIPT FUNDAMENTALS
 * ========================================
 * Focus: freeCodeCamp Basic JavaScript (First ~70 challenges)
 * Topics: Variables, Coercion, Strings, Basic Arrays, Control Flow
 * Rules: Vanilla JS only.
 * Run the file to see if your tests pass.
 * ========================================
 */
"use strict"
console.log("=== Part 1: Type Coercion & Equality (Predictions) ===")

// ── Q1: Coercion & Operators (4 pts) ──
console.log("\n<<<===>>> Question 1 <<<===>>>\n")
// Predict the output of each line. Write your answer as a comment.
console.log("5" + 5) // Your prediction: 55
console.log("5" - 2) // Your prediction: 3
console.log(8 % 3) // Your prediction: 2
console.log(typeof null) // Your prediction: object

// ── Q2: Equality & Scope (4 pts) ──
console.log("\n<<<===>>> Question 2 <<<===>>>\n")
// Predict the output.
console.log(3 == "3") // Your prediction: true
console.log(3 === "3") // Your prediction: false

let a = 10
function changeValue() {
  let a = 20
  return a
}
console.log(changeValue()) // Your prediction: 20
console.log(a) // Your prediction: 10

// ── Q3: Const Mutation (2 pts) ──
console.log("\n<<<===>>> Question 3 <<<===>>>\n")
// Predict what happens when this code runs.
const myArr = [1, 2, 3]
myArr[0] = 99
console.log(myArr) // Your prediction: [99, 2, 3]

console.log("\n=== Part 2: Strings & Arrays ===")

// ── Q4: String Manipulation ──
console.log("\n<<<===>>> Question 4 <<<===>>>\n")
/**
 * Write a function that takes a string and a number 'n'.
 * Return the 'n'th-to-last character of the string.
 * Example: nthToLast("freeCodeCamp", 2) -> "m"
 * @param {String} str any sentence.
 * @param {Number} n
 * @returns {String} Return the 'n'th-to-last character of the string.
 */
function nthToLast(str, n) {
  try {
    if (n > str.length || n <= 0) {
      throw new RangeError("Range Error")
    }
    return str[str.length - n]
  } catch (error) {
    return `${error.message}`
  }
}

// Tests Q4:
console.log(nthToLast("JavaScript", 1)) // expected: "t"
console.log(nthToLast("Hello World", 3)) // expected: "r"
console.log(nthToLast("freeCodeCamp", 2)) // expected: "m"

// ── Q5: Stand in Line (Queue) ──
console.log("\n<<<===>>> Question 5 <<<===>>>\n")
/**
 * Write a function nextInLine which takes an array (arr) and a number (item).
 * Add the number to the end of the array, then remove the first element of the array. The nextInLine function should then return the element that was removed.
 * @param {Array} arr any array.
 * @param {Number} item any item to add into array.
 * @returns {Number|String|Boolean} return the element that was removed.
 */
function nextInLine(arr, item) {
  if (arr.length === 0) {
    arr.push(item)
    return ""
  }
  const removed = arr.shift()
  arr.push(item)
  return removed
}

// Tests Q5:
let testArr = [1, 2, 3, 4, 5]
let resultNextInLine = nextInLine(testArr, 6)
console.log(">>>NextInLine ", resultNextInLine) // expected: 1
console.log(testArr) // expected: [2, 3, 4, 5, 6]

console.log("\n=== Part 3: Control Flow ===")

// ── Q6: Golf Code (Multiple Conditions) ──
console.log("\n<<<===>>> Question 6 <<<===>>>\n")
/**
 * In the game of Golf, each hole has a par, meaning the average number of strokes a golfer is expected to make. Depending on how far above or below par your strokes are, there is a different nickname.
 * Write a function that takes 'par' and 'strokes' arguments. Return the correct
 * string according to this table:
 * * Strokes     | Return
 * 1           | "Hole-in-one!"
 * <= par - 2  | "Eagle"
 * par - 1     | "Birdie"
 * par         | "Par"
 * par + 1     | "Bogey"
 * par + 2     | "Double Bogey"
 * >= par + 3  | "Go Home!"
 * @param {Array} par any array.
 * @param {Number} strokes any item to add into array.
 * @returns {String} return the element that was removed.
 */
function golfScore(par, strokes) {
  let decision
  if (strokes === 1) {
    decision = "Hole-in-one!"
  } else if (strokes <= par - 2) {
    decision = "Eagle"
  } else if (strokes === par - 1) {
    decision = "Birdie"
  } else if (strokes === par) {
    decision = "Par"
  } else if (strokes === par + 1) {
    decision = "Bogey"
  } else if (strokes === par + 2) {
    decision = "Double Bogey"
  } else if (strokes >= par + 3) {
    decision = "Go Home!"
  }
  return decision
}

// Tests Q6:
console.log(golfScore(4, 1)) // expected: "Hole-in-one!"
console.log(golfScore(4, 2)) // expected: "Eagle"
console.log(golfScore(5, 4)) // expected: "Birdie"
console.log(golfScore(4, 4)) // expected: "Par"
console.log(golfScore(4, 7)) // expected: "Go Home!"

// ── Q7: Switch Statements ──
console.log("\n<<<===>>> Question 7 <<<===>>>\n")
/**
 * Write a function that takes a lowercase string representing a day of the week.
 * Use a switch statement to return the following:
 * "monday" -> "Start of the week"
 * "tuesday", "wednesday", "thursday" -> "Midweek"
 * "friday" -> "Almost weekend"
 * "saturday", "sunday" -> "Weekend"
 * Anything else -> "Invalid day"
 */

/**
 * Write a function that takes a lowercase string representing a day of the week. Use a switch statement to return the following:
 * "monday" -> "Start of the week"
 * "tuesday", "wednesday", "thursday" -> "Midweek"
 * "friday" -> "Almost weekend"
 * "saturday", "sunday" -> "Weekend"
 * Anything else -> "Invalid day"
 * @param {String} day
 */
function dayClassifier(day) {
  let decision
  switch (day.toLowerCase()) {
    case "monday":
      decision = "Start of the week"
      break
    case "tuesday":
    case "wednesday":
    case "thursday":
      decision = "Midweek"
      break
    case "friday":
      decision = "Almost weekend"
      break
    case "saturday":
    case "sunday":
      decision = "Weekend"
      break
    default:
      decision = "Invalid day"
      break
  }
  return decision
}

// Tests Q7:
console.log(dayClassifier("wednesday")) // expected: "Midweek"
console.log(dayClassifier("thursday")) // expected: "Midweek"
console.log(dayClassifier("saturday")) // expected: "Weekend"
console.log(dayClassifier("funday")) // expected: "Invalid day"
