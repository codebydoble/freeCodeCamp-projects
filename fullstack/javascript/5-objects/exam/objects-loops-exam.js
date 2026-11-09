/**
 * ========================================
 * EXAM 1: OBJECTS & LOOPS FOUNDATIONS
 * ========================================
 * Focus: freeCodeCamp Objects & Loops
 * Rules: Vanilla JS only. No looking at the docs.
 * Run the file to see if your tests pass.
 * ========================================
 */
"use strict"
console.log("=== Part 1: Nested Data & Iteration ===")

// ── Q1: Record Collection (A classic FCC concept) ──
console.log("\n<<<===>>> Question 1 <<<===>>>\n")
const recordCollection = {
  2548: { albumTitle: "Slippery When Wet", artist: "Bon Jovi", tracks: ["Let It Rock", "You Give Love a Bad Name"] },
  2468: { albumTitle: "1999", artist: "Prince", tracks: ["1999", "Little Red Corvette"] },
  1245: { artist: "Robert Palmer", tracks: [] },
  5439: { albumTitle: "ABBA Gold" },
}

/**
 * Write a function that takes an ID, a property (prop), and a value.
 * - If value is empty string, delete the given prop.
 * - If prop isn't "tracks" and value isn't empty, assign value to that prop.
 * - If prop is "tracks" and value isn't empty, push the value to the tracks array
 * (create the array first if it doesn't exist).
 * Return the entire collection object.
 * @param {Object} records Object record collection.
 * @param {Number} id any id in record collection.
 * @param {String} prop any prop to update/delete in record.
 * @param {String} value any value to assign in record. If empty delete prop.
 * @returns {Object} Object record collection.
 */
function updateRecords(records, id, prop, value) {
  // 1. checks value === "" delete prop
  if (!value.trim()) {
    if (prop in records[id]) {
      delete records[id][prop]
    }
    return records
  }
  if (prop !== "tracks") {
    //2. prop diff tracks, assign value to that prop.
    records[id][prop] = value
  } else {
    //3. If prop is "tracks" and value isn't empty, push the value to the tracks
    if (!Object.hasOwn(records[id], prop)) {
      records[id][prop] = []
    }
    records[id][prop].push(value)
  }
  return records
}

// Tests Q1:
console.log("Q1 Tests:")
updateRecords(recordCollection, 5439, "artist", "ABBA")
console.log(recordCollection[5439].artist === "ABBA") // expected: true
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.log(recordCollection[5439].tracks[0] === "Take a Chance on Me") // expected: true

// ── Q2: Deep Object Iteration (for...in) ──
console.log("\n<<<===>>> Question 2 <<<===>>>\n")
/**
 * Write a function that takes an object and returns the sum of all numeric
 * properties. If a property is an object itself, use recursion to sum its numbers too.
 */
const mixedData = { a: 1.55, b: "hello", c: { d: 10, e: { f: 5 } }, g: 20.32, h: ["Array", 2, 65.3, "8"], i: null, x: 36 }

/**
 * Function that takes an object and returns the sum of all numeric
 * properties. If a property is an object itself, use recursion to sum its numbers too.
 * @param {Object} obj any object.
 * @returns {Number} the sum of all numeric properties.
 */
function sumDeepNumbers(obj) {
  // 1. use reduce
  return Object.entries(obj).reduce((sum, prop) => {
    const [, value] = prop
    // 1. checks value is number
    if (typeof value === "number") {
      sum += value
    }
    // 2. checks array
    if (Array.isArray(value)) {
      sum += sumDeepNumbers(value)
    }
    // 3. checks obj diff null
    if (typeof value === "object" && value !== null) {
      sum = sum + sumDeepNumbers(value)
    }
    return sum
  }, 0)
}

// Tests Q2:
console.log("\nQ2 Tests:")
console.log(sumDeepNumbers(mixedData)) // expected: 40

console.log("\n=== Part 2: Loops & Recursion ===")

// ── Q3: Multi-dimensional Array Looping ──
console.log("\n<<<===>>> Question 3 <<<===>>>\n")
/**
 * Write a function that takes a 2D array and returns a 1D array of the largest
 * number from each sub-array. Use nested 'for' or 'while' loops (no .map or .reduce).
 */
/**
 * Function that takes a 2D array and returns a 1D array of the largest number from each sub-array.
 * @param {Array} arr any 2D array of numbers.
 * @returns {Array} a 1D array of the largest number from each sub-array.
 */
function largestOfFour(arr) {
  return arr.reduce(
    /**
     * Reduce to find largest numbers in 2D array.
     * @param {Array} largest final acc of largest numbers.
     * @param {Array} arrOneD any array.
     * @returns {Array} array of largest numbers.
     */
    (largest, arrOneD) => {
      let largeValue = -Infinity
      for (const element of arrOneD) {
        if (element > largeValue) largeValue = element
      }
      largest.push(largeValue)
      return largest
    },
    [],
  )
}

// Tests Q3:
console.log("Q3 Tests:")
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
)
// expected: [5, 27, 39, 1001]

// ── Q4: Pure Recursion ──
console.log("\n<<<===>>> Question 4 <<<===>>>\n")
/**
 * Write a recursive function that returns an array containing the numbers `startNum` through `endNum`.
 * Do NOT use loops.
 */

/**
 * Recursive function that returns an array containing the numbers `startNum` through `endNum`.
 * @param {Number} startNum any number smaller than endNum.
 * @param {Number} endNum any number bigger than startNum.
 * @returns {Array} an array containing the numbers `startNum` through `endNum`.
 */
function rangeOfNumbers(startNum, endNum) {
  // 1. checks startNum === endNum
  if (startNum === endNum) {
    return [endNum]
  }
  // 2. recursion with acc
  return [startNum, ...rangeOfNumbers(startNum + 1, endNum)]
}

// Tests Q4:
console.log("\nQ4 Tests:")
console.log(rangeOfNumbers(1, 5)) // expected: [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(4, 4)) // expected: [4]
