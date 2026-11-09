/**
 * ========================================
 * FUNCTIONS & ARRAYS MASTERY EXAM
 * ========================================
 * Student: Yoandy Doble Herrera
 * Date: 01/05/2026
 * Start Time: 08:43 am  elapsed time 35 hours
 * End Time:   14:03 pm
 *
 * RULES:
 * - No external libraries. Vanilla JS only.
 * - No copy-pasting from previous files.
 * - console.log your results — every function must be tested.
 * - Write JSDoc for every function.
 * - Read each problem fully before coding.
 *
 * STRUCTURE:
 * Part 1 — Theory & Predictions   (25 pts)
 * Part 2 — Array Methods          (30 pts)
 * Part 3 — Functions deep dive    (25 pts)
 * Part 4 — Combined challenges    (20 pts)
 * ─────────────────────────────────────────
 * Total: 100 pts | Passing: 75 pts
 * ========================================
 */

// ════════════════════════════════════════
// PART 1 — THEORY & PREDICTIONS (25 pts)
// ════════════════════════════════════════
// For each block: write what you expect the output to be AS A COMMENT
// before running the code. Then run it and check.
// Award yourself full points only if your prediction was correct BEFORE running.

console.log("\n=== Part 1 — Theory & Predictions ===")

// ── Q1 (3 pts) ───────────────────────────
// Predict the output of each line. Write your answer as a comment next to each.
const arr1 = [1, 2, 3, 4, 5]
console.log(arr1.length) // Your prediction: 5
console.log(arr1[arr1.length - 1]) // Your prediction: 5
console.log(arr1[-1]) // Your prediction: undefined

// ── Q2 (3 pts) ───────────────────────────
// Predict what gets logged.
const a = [1, 2, 3]
const b = a
b.push(4)
console.log(a) // Your prediction: [1,2,3,4]
console.log(a === b) // Your prediction: true

const c = [1, 2, 3]
const d = [...c]
d.push(4)
console.log(c) // Your prediction: [1,2,3]

// ── Q3 (3 pts) ───────────────────────────
// Predict the output.
function outer(x) {
  function inner(y) {
    return x + y
  }
  return inner
}
const add5 = outer(5)
console.log(add5(3)) // Your prediction: 8
console.log(add5(10)) // Your prediction: 15
console.log(outer(2)(8)) // Your prediction: 10

// ── Q4 (3 pts) ───────────────────────────
// Predict the output.
const nums = [1, 2, 3, 4, 5]
const result1 = nums.map((n) => n * 2).filter((n) => n > 4)
console.log(result1) // Your prediction: [6,8,10]

const result2 = nums.reduce((acc, n) => acc + n, 10)
console.log(result2) // Your prediction: 25

// ── Q5 (4 pts) ───────────────────────────
// Predict the output. Think carefully about scope and hoisting.
console.log(typeof myFunc) // Your prediction: function
//console.log(typeof myArrow) // Your prediction: ReferenceError: Cannot access 'myArrow' before initialization

function myFunc() {
  return 42
}
const myArrow = () => 42

console.log(myFunc()) // Your prediction: 42
console.log(myArrow()) // Your prediction: 42

// ── Q6 (4 pts) ───────────────────────────
// Predict the output. Think about mutation vs. copying.
const matrix = [
  [1, 2],
  [3, 4],
]
const flat1 = matrix.flat()
console.log(flat1) // Your prediction: [1,2,3,4]

const words = ["hello world", "foo bar"]
const flat2 = words.flatMap((w) => w.split(" "))
console.log(flat2) // Your prediction: [ 'hello', 'world', 'foo', 'bar' ]

// ── Q7 (5 pts) ───────────────────────────
// What does this function do? Write a one-sentence explanation as a comment,
// then predict the three outputs.

/**
 *
 * @param {Array} arr
 * @param {Function} fn
 * @returns
 */
const mystery = (arr, fn) =>
  arr.reduce((acc, val) => {
    const key = fn(val)
    if (!acc[key]) acc[key] = []
    acc[key].push(val)
    return acc
  }, {})

const people = ["Alice", "Bob", "Anna", "Brian", "Charlie"]
const grouped = mystery(people, (name) => name[0])
console.log(grouped) // Your prediction:  { A: [ 'Alice', 'Anna' ], B: [ 'Bob', 'Brian' ], C: [ 'Charlie' ] }
console.log(grouped["A"]) // Your prediction: [ 'Alice', 'Anna' ]
console.log(grouped["B"].length) // Your prediction: 2

// One-sentence explanation of what mystery() does: Function that receives an arry as first parameter and a function as second parameter. The function reduces array accumulated result into object with first letter word of each non repeated letter as key. Group words by key in array into arrays ex. A: [ 'Alice', 'Anna' ]. Return an object.
// YOUR ANSWER: Return an object with all ocurrences first letter grouped.

// ════════════════════════════════════════
// PART 2 — ARRAY METHODS (30 pts)
// ════════════════════════════════════════

console.log("\n=== Part 2 — Array Methods ===")

// ── C1 (4 pts) ───────────────────────────
/**
 * Given an array of integers, return a new array containing only the unique values,
 * preserving the order of first appearance.
 * Do NOT use Set directly on the array — implement the logic yourself using array methods.
 *
 * unique([1, 2, 1, 3, 2, 4]) → [1, 2, 3, 4]
 * unique([5, 5, 5]) → [5]
 * unique([]) → []
 */
// Your solution:
/**
 * Function that return a new array containing only the unique values,
 * preserving the order of first appearance.
 * @param {Array} arr an array of integers.
 * @returns {Array} a new array containing only the unique values.
 */
const unique = (arr) => {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item)
    return acc
  }, [])
}

// --- Test Cases ---
console.log("--- Challenge 1 Running Tests ---")
console.log(unique([1, 2, 1, 3, 2, 4])) // expected: [ 1, 2, 3, 4 ]
console.log(unique([5, 5, 5])) //  expected: [ 5 ]
console.log(unique([])) //  expected: []
console.log(unique([10, 20, 30, 10, 20])) //  expected:  [10, 20, 30]
console.log(unique([0, 0, 1, 1, 2])) //  expected: [0, 1, 2]
console.log(unique([-1, -1, 0, 1, 1])) //  expected: [-1, 0, 1]
console.log(unique([3, 1, 4, 1, 5, 9, 2, 6, 5])) //  expected: [3, 1, 4, 5, 9, 2, 6]
console.log("\n====================================")

// ── C2 (4 pts) ───────────────────────────
/**
 * Given an array of strings, return an object where each key is a string
 * and the value is the number of times it appears in the array.
 * Use reduce.
 *
 * countOccurrences(["a","b","a","c","b","a"]) → { a: 3, b: 2, c: 1 }
 * countOccurrences([]) → {}
 */
// Your solution:
/**
 * Function that count string occurrences.
 * @param {Array} arr any array of strings.
 * @returns {Object} return an object where each key is a string
 * and the value is the number of times it appears in the array.
 */
const countOccurrences = (arr) => {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
}

// --- Test Cases ---
console.log("--- Challenge 2 Running Tests ---")
console.log(countOccurrences(["a", "b", "a", "c", "b", "a"])) // { a: 3, b: 2, c: 1 }
console.log(countOccurrences([])) //  expected: {}
console.log(countOccurrences(["x", "x", "y"])) // { x: 2, y: 1 }
console.log(countOccurrences([1, 2, 1, 3, 2, 1])) // { '1': 3, '2': 2, '3': 1 }
console.log(countOccurrences(["cat", "dog", "cat"])) // { cat: 2, dog: 1 }
console.log(countOccurrences([10, 10, 10, 20])) // { '10': 3, '20': 1 }
console.log(countOccurrences(["apple", "banana", "apple", "cherry", "banana", "apple"])) // { apple: 3, banana: 2, cherry: 1 }
console.log(countOccurrences(["A", "a", "A", "a"])) // { A: 2, a: 2 }
console.log("\n====================================")

// ── C3 (5 pts) ───────────────────────────
/**
 * Given a nested array of any depth, return a fully flattened array.
 * Do NOT use Array.flat() or Array.flatMap().
 * Implement it yourself — think recursion.
 *
 * deepFlat([1, [2, [3, [4]], 5]]) → [1, 2, 3, 4, 5]
 * deepFlat([1, 2, 3]) → [1, 2, 3]
 * deepFlat([]) → []
 */
// Your solution:
/**
 * Function that implement Array.flat() or Array.flatMap() given a nested array of any depth, return a fully flattened array.
 * @param {Array} arr a nested array of any depth.
 * @returns {Array} return a fully flattened array.
 */
const deepFlat = (arr) => {
  return arr.reduce((acc, num) => {
    if (typeof num === "number") {
      // its a number
      acc.push(num)
    } else {
      // Array, apply recursion
      acc.push(...deepFlat(num))
    }
    return acc
  }, [])
}

// --- Test Cases ---
console.log("--- Challenge 3 Running Tests ---")
console.log(deepFlat([1, [2, [3, [4]], 5]])) // expected: [1, 2, 3, 4, 5]
console.log(deepFlat([1, 2, 3])) //  expected: [1, 2, 3]
console.log(deepFlat([])) // expected: []
console.log("\n====================================")

// ── C4 (4 pts) ───────────────────────────
/**
 * Given an array of objects representing students, return a new array
 * containing only students who passed (score >= 60), sorted by score descending, with only their name and score (no other properties).
 *
 * Input:
 * [
 *   { name: "Alice", score: 90, age: 20 },
 *   { name: "Bob", score: 45, age: 22 },
 *   { name: "Carol", score: 75, age: 19 },
 *   { name: "Dave", score: 60, age: 21 },
 * ]
 * Output:
 * [
 *   { name: "Alice", score: 90 },
 *   { name: "Carol", score: 75 },
 *   { name: "Dave", score: 60 },
 * ]
 */
const students = [
  { name: "Alice", score: 90, age: 20 },
  { name: "Bob", score: 45, age: 22 },
  { name: "Carol", score: 75, age: 19 },
  { name: "Dave", score: 60, age: 21 },
]
const studentsPhi = [
  { name: "Alexa", score: 45, age: 22 },
  { name: "Carol", score: 75, age: 30 },
  { name: "Javier", score: 59, age: 21 },
  { name: "Karen", score: 80, age: 25 },
]
const studentsUCI = [
  { name: "Bob", score: 45, age: 22 },
  { name: "Briyi", score: 75, age: 19 },
  { name: "Kevin", score: 59, age: 25 },
  { name: "Jonathan", score: 84, age: 20 },
  { name: "Melissa", score: 75, age: 28 },
  { name: "Manuel", score: 75, age: 19 },
  { name: "Julio Cesar", score: 77, age: 36 },
  { name: "Yoandy", score: 95, age: 37 },
]

const studentsUH = [
  { name: "Cristina", score: 85, age: 22 },
  { name: "Briyi", score: 75, age: 19 },
  { name: "Barbara", score: 93, age: 28 },
  { name: "Jonathan", score: 56, age: 20 },
  { name: "Melissa", score: 75, age: 28 },
]
// Your solution:
/**
 * Function that given an array of objects representing students return a new array containing only students who passed (score >= 60), sorted by score descending, with only their name and score.
 * @param {Array} arr an array of objects representing students.
 * @returns {Array} a new array containing only students who passed (score >= 60), sorted by score descending, with only their name and score.
 */
const graduates = (arr) => {
  return arr
    .filter((student) => {
      return student.score >= 60
    })
    .map((student) => {
      return { name: student.name, score: student.score }
    })
    .sort((a, b) => b.score - a.score)
}

// --- Test Cases ---
console.log("--- Challenge 4 Running Tests ---")
console.log(graduates(students)) // expected: [{ name: "Alice", score: 90 }, { name: "Carol", score: 75 }, { name: "Dave", score: 60 }, ]
console.log(graduates(studentsPhi)) // expected: [{ name: "Karen", score: 80, age: 25 }, { name: "Carol", score: 75, age: 30 },]
console.log(graduates(studentsUCI)) // expected: [{ name: "Yoandy", score: 95, age: 37 }, { name: "Jonathan", score: 84, age: 20 }, { name: "Julio Cesar", score: 77, age: 36 }, { name: "Briyi", score: 75, age: 19 }, { name: "Melissa", score: 75, age: 28 }, { name: "Manuel", score: 75, age: 19 },]
console.log(graduates(studentsUH)) // expected: [{ name: 'Barbara', score: 93 }, { name: 'Cristina', score: 85 }, { name: 'Briyi', score: 75 }, { name: 'Melissa', score: 75 }]
console.log("\n====================================")

// ── C5 (5 pts) ───────────────────────────
/**
 * Implement your own version of Array.prototype.map WITHOUT using
 * map, filter, reduce, or forEach. Use a for loop or for...of.
 * It must behave exactly like the native map.
 *
 * myMap([1, 2, 3], x => x * 2) → [2, 4, 6]
 * myMap(["a", "b"], s => s.toUpperCase()) → ["A", "B"]
 * myMap([], x => x) → []
 */
// Your solution:
/**
 * Function that implements own version of Array.prototype.map WITHOUT using
 * map, filter, reduce, or forEach.
 * @param {Array} arr any array.
 * @param {Function} fnc function to map array.
 * @returns {Array} mapped array.
 */
const myMap = (arr, fnc) => {
  if (arr.length === 0) return []
  const result = []
  for (const element of arr) {
    const mappedElement = fnc(element)
    result.push(mappedElement)
  }
  return result
}

// --- Test Cases ---
console.log("--- Challenge 5  Running Tests ---")
console.log(myMap([1, 2, 3], (x) => x * 2)) // expected: [2, 4, 6]
console.log(myMap(["a", "b"], (s) => s.toUpperCase())) // expected: ["A", "B"]
console.log(myMap(["bob", "briyi", "Kevin"], (student) => student[0].toUpperCase() + student.slice(1))) // expected: ["Bob", "Briyi","Kevin"]
console.log(myMap([], (x) => x)) // expected: []
console.log("\n====================================")

// ── C6 (4 pts) ───────────────────────────
/**
 * Given an array of numbers, return an object with:
 * - min: the minimum value
 * - max: the maximum value
 * - avg: the average (rounded to 2 decimal places)
 * - sum: the total sum
 * Use a SINGLE reduce call — no multiple passes over the array.
 *
 * stats([3, 1, 4, 1, 5, 9]) → { min: 1, max: 9, avg: 3.83, sum: 23 }
 * stats([10]) → { min: 10, max: 10, avg: 10, sum: 10 }
 */
// Your solution:

/**
 * Function that given an array of numbers gets min, max, avg and sum.
 * @param {Array} arr any array of numbers.
 * @returns {Object} return min, max, avg and sum from array of numbers.
 */
const stats = (arr) => {
  if (arr.length === 0) return {}
  //let result = {}
  // 1. Get min array value
  const minimun = Math.min(...arr)
  // 2. Get max array value
  const maximun = Math.max(...arr)
  let result = arr.reduce((acc, item) => {
    //console.log(">>>Acumalate previous", acc)
    //console.log(">>>Actual", item)
    // 3. Add min to obj.
    if (!Object.hasOwn(acc, "min")) acc.min = minimun
    // 4. Add max to obj.
    if (!Object.hasOwn(acc, "max")) acc.max = maximun
    // 5. Avg
    acc["avg"] = (acc["avg"] || 0) + item
    // 6. Sum
    acc["sum"] = (acc["sum"] || 0) + item
    /* Obj Updated */
    return acc
  }, {})
  result.avg = Math.floor(result.avg / arr.length)
  return result
}

// --- Test Cases ---
console.log("--- Challenge 6  Running Tests ---")
console.log(stats([3, 1, 4, 1, 5, 9])) // expected: { min: 1, max: 9, avg: 3.83, sum: 23 }
console.log(stats([10])) // expected: { min: 10, max: 10, avg: 10, sum: 10 }
console.log(stats([12, -5, 33, 10])) // expected: { min: -5, max: 33, avg: 12, sum: 50 }
console.log(stats([3, 1, 4, 1, 5, 9, 2, 6, 5])) // expected: { min: 1, max: 9, avg: 4, sum: 36 }
console.log(stats([10, 20, 10, 30, 20, 10])) // expected: { min: 10, max: 30, avg: 16, sum: 100  }
console.log("\n====================================")

// ── C7 (4 pts) ───────────────────────────
/**
 * Given two arrays, return true if they have the same elements
 * regardless of order (treat as multisets — duplicates matter).
 *
 * sameElements([1,2,3], [3,2,1]) → true
 * sameElements([1,2,2], [2,1,2]) → true
 * sameElements([1,2,3], [1,2,4]) → false
 * sameElements([1,2], [1,2,3]) → false
 *
 * Hint: think about sorting, or counting occurrences.
 */
// Your solution:

/**
 * Function that checks if given two arrays returns true/false if they have the same elements.
 * @param {Array} arr1 any number array.
 * @param {Array} arr2 any number array.
 * @returns {Boolean} return true if they have the same elements
 * regardless of order
 */
const sameElements = (arrOne, arrTwo) => {
  // 1. Check length
  if (arrOne.length !== arrTwo.length) return false

  // 2. Create map occurrences
  const arrOneMap = arrToMap(arrOne)
  const arrTwoMap = arrToMap(arrTwo)

  // 3. Compare maps
  let decision = true
  for (const [key, value] of arrOneMap.entries()) {
    if (!arrTwoMap.has(key) || arrTwoMap.get(key) !== value) {
      decision = false
      break
    }
  }
  return decision
}

/**
 * Function that count element occurrences and create and Map.
 * @param {Array} arr any number array.
 * @returns {Map} ocurrences Map.
 */
const arrToMap = (arr) => {
  let arrMap = new Map()
  for (const item of arr) {
    arrMap.set(item, (arrMap.get(item) || 0) + 1)
  }
  return arrMap
}

// --- Test Cases ---
console.log("--- Challenge 7  Running Tests ---")
console.log(sameElements([1, 2, 3], [3, 2, 1])) // expected: true
console.log(sameElements([1, 2, 2], [2, 1, 2])) // expected: true
console.log(sameElements([1, 2, 3], [1, 2, 4])) // expected: false
console.log(sameElements([1, 2], [1, 2, 3])) // expected: false
console.log("\n====================================")

// ════════════════════════════════════════
// PART 3 — FUNCTIONS DEEP DIVE (25 pts)
// ════════════════════════════════════════

console.log("\n=== Part 3 — Functions Deep Dive ===")

// ── F1 (4 pts) ───────────────────────────
/**
 * Write a function memoize(fn) that takes any function and returns a new function that caches its results. If called again with the same argument, return the cached result without calling fn again.
 * const slowDouble = n => { ...some slow computation... return n * 2 }
 * const fastDouble = memoize(slowDouble)
 * fastDouble(5) → 10 (computed)
 * fastDouble(5) → 10 (from cache — fn not called again)
 * fastDouble(3) → 6  (computed)
 */
// Your solution:

/**
 * Function memoize(fn) that takes any function and returns a new function that caches its results.
 * @param {Function} fn any function.
 * @returns returns a new function that caches its results.
 */
const memoize = (fn) => {
  return (x) => fn(x)
}

/**
 * Function that given a number pow by 2.
 * @param {Number} n any number.
 * @returns {Number} numbur duplicated.
 */
const slowDouble = (n) => {
  return n * 2
}
const fastDouble = memoize(slowDouble)
// --- Test Cases ---
console.log("--- Challenge 1  Running Tests ---")
console.log(fastDouble(5)) // expected: 10 (computed)
console.log(fastDouble(5)) // expected: 10 (from cache — fn not called again)
console.log(fastDouble(3)) // expected: 6 (computed)
console.log("\n====================================")

// ── F2 (4 pts) ───────────────────────────
/**
 * Write a function pipe(...fns) that takes any number of functions and returns a new function that applies them left to right.
 * The output of each function becomes the input of the next.
 *
 * const process = pipe(
 *   x => x * 2,
 *   x => x + 1,
 *   x => x ** 2
 * )
 * process(3) → ((3 * 2) + 1) ** 2 → 49
 * process(0) → ((0 * 2) + 1) ** 2 → 1
 */
// Your solution:

/**
 * Function that takes any number of functions and returns a new function that applies them left to right.
 * @param  {...Function} fns array of functions.
 * @returns a new function that applies them left to right.
 */
const pipe = (...fns) => {
  return fns.reduce(
    (fn, nextFn) => {
      return (x) => nextFn(fn(x))
    },
    (x) => x,
  )
}

// --- Test Cases ---
console.log("--- Challenge 2  Running Tests ---")
const process = pipe(
  (x) => x * 2,
  (x) => x + 1,
  (x) => x ** 2,
)
console.log(process(3)) // expected: ((3 * 2) + 1) ** 2 → 49
console.log(process(0)) // expected: ((0 * 2) + 1) ** 2 → 1
console.log(process(15)) // expected: ((15 * 2) + 1) ** 2 → 961
console.log("\n====================================")

// ── F3 (5 pts) ───────────────────────────
/**
 * Write a function curry(fn) that transforms a function of N arguments
 * into a chain of N single-argument functions.
 *
 * const add = (a, b, c) => a + b + c
 * const curriedAdd = curry(add)
 * curriedAdd(1)(2)(3) → 6
 * curriedAdd(10)(20)(30) → 60
 *
 * Hint: check fn.length to know how many arguments are expected.
 *       Think recursion — if not enough args collected yet, return another function.
 */
// Your solution:

/**
 * Function that transforms a function of N arguments
 * into a chain of N single-argument functions.
 * @param {Function} fn
 */
const curry = (fn) => {
  return (...args) => fn(...args)
}

// --- Test Cases ---
console.log("--- Challenge 3  Running Tests ---")
const add = (a, b, c) => a + b + c
const curriedAdd = curry(add)
//console.log(curriedAdd(1)(2)(3)) // expected: 6
//console.log(curriedAdd(10)(20)(30)) // expected: 60
console.log("\n====================================")

// ── F4 (4 pts) ───────────────────────────
/**
 * Write a function once(fn) that ensures fn is only called ONCE.
 * Every subsequent call returns the result of the first call
 * without executing fn again.
 *
 * let count = 0
 * const increment = once(() => ++count)
 * increment() → 1
 * increment() → 1  (not 2 — fn not called again)
 * increment() → 1
 * console.log(count) → 1
 */
// Your solution:

/**
 * Function that ensures fn is only called ONCE.
 * @param {Function} fn any function.
 * @returns {Function} result of the first call without executing fn again.
 */
const once = (fn) => {
  let iterator = 0
  return () => {
    if (++iterator === 1) fn()
  }
}

// --- Test Cases ---
console.log("--- Challenge 4  Running Tests ---")
let count = 0
const increment = once(() => ++count)
increment() //→ 1
increment() //→ 1  (not 2 — fn not called again)
console.log(count)
increment() //→ 1
console.log(count) //→ 1
console.log("\n====================================")

// ── F5 (4 pts) ───────────────────────────
/**
 * Write a recursive function flatten that works like deepFlat from C3
 * but implemented as a pure recursive function using no loops —
 * only recursion and array spread/concat.
 *
 * flattenRecursive([1, [2, [3]]]) → [1, 2, 3]
 *
 * Then: write the same function using reduce instead of recursion.
 * flattenReduce([1, [2, [3]]]) → [1, 2, 3]
 */

// Your solution (recursive with spread):
/**
 * Function that implement Array.flat() or Array.flatMap() given a nested array of any depth, return a fully flattened array.
 * @param {Array} arr a nested array of any depth.
 * @returns {Array} return a fully flattened array.
 */
const deepFlatWithSpread = (arr) => {
  if (arr.length === 0) return []
  const [first, ...rest] = arr
  if (typeof first === "number") {
    return [first, ...deepFlatWithSpread(rest)]
  } else {
    return deepFlatWithSpread(first.concat(rest))
  }
}

// Your solution (with reduce):

/**
 * Function that implement Array.flat() or Array.flatMap() given a nested array of any depth, return a fully flattened array.
 * @param {Array} arr a nested array of any depth.
 * @returns {Array} return a fully flattened array.
 */
const deepFlatWithReduce = (arr) => {
  return arr.reduce((acc, num) => {
    if (typeof num === "number") {
      // its a number
      acc.push(num)
    } else {
      // Array, apply recursion
      acc.push(...deepFlatWithReduce(num))
    }
    return acc
  }, [])
}

// --- Test Cases ---
console.log("--- Challenge 5 Running Tests ---")
console.log(">>>deepFlatWithSpread", deepFlatWithSpread([1, [2, [35, 58, [36]]], [2, [3, [4]], 5]])) // expected: [1, 2, 3, 4, 5]
console.log(">>>deepFlatWithSpread", deepFlatWithSpread([1, 2, 3])) //  expected: [1, 2, 3]

console.log(">>>deepFlatWithSpread", deepFlatWithSpread([])) // expected: []
console.log(">>>deepFlatWithReduce", deepFlatWithReduce([1, [2, [35, 58, [36]]], [2, [3, [4]], 5]])) // expected: [1, 2, 3, 4, 5]
console.log(">>>deepFlatWithReduce", deepFlatWithReduce([1, 2, 3])) //  expected: [1, 2, 3]
console.log(">>>deepFlatWithReduce", deepFlatWithReduce([])) // expected: []
console.log("\n====================================")

// ── F6 (4 pts) ───────────────────────────
/**
 * Write a function debounce(fn, delay) that delays invoking fn until
 * after `delay` milliseconds have elapsed since the last time it was called.
 * If called again before the delay expires, reset the timer.
 *
 * This is a real-world pattern used in search inputs, resize handlers, etc.
 *
 * const log = debounce(msg => console.log(msg), 300)
 * log("a")  // timer starts
 * log("b")  // timer resets
 * log("c")  // timer resets
 * // after 300ms of silence → "c" is logged (only once)
 *
 * Hint: use setTimeout and clearTimeout.
 * Test it with setTimeout calls at different intervals.
 */
// Your solution:

/**
 * Function that delays invoking fn until
 * after `delay` milliseconds have elapsed since the last time it was called.
 * If called again before the delay expires, reset the timer.
 * @param {Function} fn
 * @param {Number} delay
 */
const debounce = (fn, delay) => {
  let count = 0
  let timeID = undefined
  return (msg) => {
    if (count === 0) {
      timeID = setTimeout(fn(msg), delay)
      console.log("TimeID", timeID)
      count++
    } else {
      if (timeID !== undefined) {
        clearTimeout(timeID)
      }
    }
  }
}

// --- Test Cases ---
console.log("--- Challenge 6 Running Tests ---")

console.log("\n====================================")
// ════════════════════════════════════════
// PART 4 — COMBINED CHALLENGES (20 pts)
// ════════════════════════════════════════

console.log("\n=== Part 4 — Combined Challenges ===")

// ── X1 (6 pts) ───────────────────────────
/**
 * Implement a pipeline function that processes a dataset of products.
 *
 * Given this array of products:
 */
const products = [
  { name: "Laptop", price: 1200, category: "tech", stock: 5 },
  { name: "Phone", price: 800, category: "tech", stock: 0 },
  { name: "Desk", price: 350, category: "furniture", stock: 3 },
  { name: "Monitor", price: 600, category: "tech", stock: 2 },
  { name: "Chair", price: 250, category: "furniture", stock: 7 },
  { name: "Tablet", price: 400, category: "tech", stock: 0 },
  { name: "Keyboard", price: 150, category: "tech", stock: 10 },
]
/**
 * Using ONLY array methods (no for loops), return:
 * {
 *   available: [...],   // products with stock > 0, sorted by price descending
 *   byCategory: { tech: [...], furniture: [...] }, // grouped by category (names only)
 *   totalValue: number, // sum of (price * stock) for available products only
 *   cheapest: object,   // the cheapest available product (full object)
 * }
 */
// Your solution:

/**
 * Function that processes a dataset of products.
 * @param {Array} arr any array of product objects.
 * @returns {Object} processed dataset of products.
 */
const pipeline = (arr) => {
  let result = {}
  // 1. Available products
  const available = availableProduct(arr)
  //console.log(">>>Available", available)
  result["available"] = available

  //2. Product category
  const categoryProduct = category(arr)
  //console.log(">>>byCategory", categoryProduct)
  result["byCategory"] = categoryProduct

  // 3. totalValue
  const totalValue = total(available)
  //console.log(">>>Total Available", totalValue)
  result["totalValue"] = totalValue

  // 4. Cheapest available product
  const cheapest = available[available.length - 1]
  //console.log(">>>Cheapest Available", cheapest)
  result["cheapest"] = cheapest
  return result
}

/**
 * Function that given a dataset of products returns products with stock > 0, sorted by price descending.
 * @param {Array} arr any array of product objects
 * @returns {Object} returns products with stock > 0, sorted by price descending.
 */
const availableProduct = (arr) => {
  return arr
    .filter((product) => {
      return product.stock > 0
    })
    .sort((a, b) => b.price - a.price)
}

/**
 *
 * @param {Array} arr
 * @returns {Object}
 */
const category = (arr) => {
  return arr.reduce((acc, product) => {
    if (!Object.hasOwn(acc, product.category)) {
      acc[product.category] = []
      acc[product.category].push(product.name)
    } else {
      acc[product.category].push(product.name)
    }
    return acc
  }, {})
}

/**
 * Function that given available products returns sum of (price * stock) only.
 * @param {Array} arr any array of available products.
 * @returns {Number} sum of (price * stock) for available products.
 */
const total = (arr) => {
  return arr.reduce((acc, product) => {
    return acc + product.price * product.stock
  }, 0)
}

// --- Test Cases ---
console.log("--- Challenge 1  Running Tests ---")
console.log(pipeline(products)) // expected:
console.log("\n====================================")

// ── X2 (7 pts) ───────────────────────────
/**
 * Write a function makeValidator(rules) that:
 * - Takes an object of validation rules (each rule is a function that returns true/false)
 * - Returns a validate(data) function
 * - validate(data) returns { valid: boolean, errors: string[] }
 *
 * Example:
 * const validator = makeValidator({
 *   name: value => value.length >= 2,
 *   age: value => value >= 18 && value <= 120,
 *   email: value => value.includes("@"),
 * })
 *
 * validator({ name: "Y", age: 25, email: "y@x.com" })
 * → { valid: false, errors: ["name"] }
 *
 * validator({ name: "Yoandy", age: 25, email: "y@x.com" })
 * → { valid: true, errors: [] }
 *
 * validator({ name: "Y", age: 15, email: "notanemail" })
 * → { valid: false, errors: ["name", "age", "email"] }
 */
// Your solution:

/**
 * Function that takes an object of validation rules (each rule is a function that returns true/false)
 * - Returns a validate(data) function
 * - validate(data) returns { valid: boolean, errors: string[] }
 *
 * @param {Object} obj any object of validation rules (each rule is a function that returns true/false)
 * @returns {Object} returns a validate(data) function - validate(data) returns { valid: boolean, errors: string[] }
 */
const makeValidator = (obj) => {
  return (data) => {
    let isValid = { valid: true, errors: [] }
    // 1. loop obj
    for (const [key, value] of Object.entries(obj)) {
      // 2. checks key in obj data to test
      if (key in data) {
        // 3. apply fn to data true/false
        if (!value(data[key])) {
          isValid.valid = false
          isValid.errors.push(key)
        }
      } else {
        isValid.valid = false
        isValid.errors.push(key)
      }
    }
    return isValid
  }
}

const validator = makeValidator({
  name: (value) => value.length >= 2,
  age: (value) => value >= 18 && value <= 120,
  email: (value) => value.includes("@"),
})

// --- Test Cases ---
console.log("--- Challenge 2  Running Tests ---")
console.log(validator({ name: "Y", age: 25, email: "y@x.com" }))
console.log(validator({ name: "Yoandy", age: 25, email: "y@x.com" }))
console.log(validator({ name: "Y", age: 15, email: "notanemail" }))
console.log("\n====================================")
// ── X3 (7 pts) ───────────────────────────
/**
 * Implement a simple observable/event emitter from scratch.
 * It must support:
 * - on(event, listener)     — subscribe a function to an event
 * - off(event, listener)    — unsubscribe a specific listener
 * - emit(event, ...args)    — call all listeners for that event with given args
 * - once(event, listener)   — subscribe but auto-unsubscribe after first emit
 *
 * Example:
 * const emitter = createEmitter()
 *
 * const greet = name => console.log(`Hello, ${name}!`)
 * emitter.on("say", greet)
 * emitter.emit("say", "Yoandy")  → "Hello, Yoandy!"
 * emitter.emit("say", "Kevin")   → "Hello, Kevin!"
 * emitter.off("say", greet)
 * emitter.emit("say", "Alice")   → (nothing — unsubscribed)
 *
 * const onceHi = name => console.log(`Hi once, ${name}!`)
 * emitter.once("greet", onceHi)
 * emitter.emit("greet", "Bob")   → "Hi once, Bob!"
 * emitter.emit("greet", "Dan")   → (nothing — auto-unsubscribed)
 */
// Your solution:

/**
 * A simple observable/event emitter from scratch.
 * It supports:
 * - on(event, listener)     — subscribe a function to an event
 * - off(event, listener)    — unsubscribe a specific listener
 * - emit(event, ...args)    — call all listeners for that event with given args
 * - once(event, listener)   — subscribe but auto-unsubscribe after first emit
 *
 * Example:
 * const emitter = createEmitter()
 *
 * const greet = name => console.log(`Hello, ${name}!`)
 * emitter.on("say", greet)
 * emitter.emit("say", "Yoandy")  → "Hello, Yoandy!"
 * emitter.emit("say", "Kevin")   → "Hello, Kevin!"
 * emitter.off("say", greet)
 * emitter.emit("say", "Alice")   → (nothing — unsubscribed)
 *
 * const onceHi = name => console.log(`Hi once, ${name}!`)
 * emitter.once("greet", onceHi)
 * emitter.emit("greet", "Bob")   → "Hi once, Bob!"
 * emitter.emit("greet", "Dan")   → (nothing — auto-unsubscribed)
 *
 */
const createEmitter = () => {
  return {
    suscribed: {},
    /**
     * Subscribe a function to an event -void-.
     * @param {String} event any event.
     * @param {Function} listener any function.
     * @returns
     */
    on(event, listener) {
      if (!Object.hasOwn(this.suscribed, event)) {
        this.suscribed[event] = [listener, false, false]
      }
    },
    /**
     * Unsubscribe a specific listener -void-.
     * @param {String} event any suscribed event.
     * @param {Function} listener any specific listener event.
     */
    off(event, listener) {
      if (Object.hasOwn(this.suscribed, event) && this.suscribed[event][0] === listener) {
        delete this.suscribed[event]
      } else {
        console.error(">>>-OFF-Event not suscribed", event)
      }
    },
    /**
     * Call all listeners for that event with given args -void-.
     * @param {String} event any suscribed event.
     * @param  {...Array} args
     */
    emit(event, ...args) {
      // 1. Checks event in obj suscribed
      if (Object.hasOwn(this.suscribed, event)) {
        // 2. Checks fn once active
        if (!this.suscribed[event][2]) {
          // 3. Perform each listener on args
          args.forEach((listener) => {
            this.suscribed[event][0](listener)
          })
          // 4. Update emitted event
          this.suscribed[event][1] = true
        } else {
          // 5. fn once active
          if (this.suscribed[event][1] === false) {
            // 6. Emit first time with once actived
            // 7. Perform each listener on args
            args.forEach((listener) => {
              this.suscribed[event][0](listener)
            })
            // 8. Update emitted event
            this.suscribed[event][1] = true
          }
        }
      }
    },
    /**
     * Subscribe but auto-unsubscribe after first emit -void-.
     * @param {*} event
     * @param {*} listener
     */
    once(event, listener) {
      // 1. Suscribe
      this.on(event, listener)
      // 2. Active status once in suscribe obj
      this.suscribed[event][2] = true
    },
  }
}

// --- Test Cases ---
console.log("--- Challenge 3  Running Tests ---")
const emitter = createEmitter()
const greet = (name) => console.log(`Hello, ${name}!`)
emitter.on("say", greet)
emitter.emit("say", "Yoandy", "Laura") //→ "Hello, Yoandy!" → "Hello, Laura!"
emitter.emit("say", "Kevin") //→ "Hello, Kevin!"
emitter.off("say", greet)
emitter.emit("say", "Alice") //→ (nothing — unsubscribed)

const onceHi = (name) => console.log(`Hi once, ${name}!`)
emitter.once("greet", onceHi)
emitter.emit("greet", "Bob") //→ "Hi once, Bob!"
emitter.emit("greet", "Dan") //→ (nothing — auto-unsubscribed)
console.log("\n==================END OF EXAM==================")

// ════════════════════════════════════════
// END OF EXAM
// ════════════════════════════════════════
/*
 Before submitting, verify:
 [ ] Every function has a JSDoc comment
 [ ] Every function has at least 2 console.log tests
 [ ] No syntax errors (run: node this-file.js)
 [ ] Your name and end time are filled in at the top
*/
