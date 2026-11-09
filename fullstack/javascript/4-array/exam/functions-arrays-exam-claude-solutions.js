/**
 * ========================================
 * FUNCTIONS & ARRAYS MASTERY EXAM — SOLUTIONS
 * ========================================
 * Student: Yoandy Doble Herrera
 * Reviewed by: Claude
 * Score: 75/100 → All bugs fixed below
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * THE CORE INSIGHT — READ THIS FIRST
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * A CLOSURE is a function that remembers variables from the
 * scope where it was created — even after that scope is gone.
 *
 * You already proved you understand this with pipe():
 *
 *   const pipe = (...fns) =>
 *     fns.reduce((fn, nextFn) => (x) => nextFn(fn(x)), (x) => x)
 *
 * The inner (x) => nextFn(fn(x)) closes over fn and nextFn.
 * Those variables live on inside the returned function.
 * That IS a closure. You wrote it perfectly.
 *
 * Now here is the pattern that unlocks everything:
 *
 *   const somePattern = (config) => {
 *     // 1. Declare something to REMEMBER across calls
 *     let memory = ...
 *
 *     // 2. Return a function that USES that memory
 *     return (...args) => {
 *       // read or update memory here
 *     }
 *   }
 *
 * Every advanced function pattern is just this skeleton
 * with a different "thing to remember":
 *
 *   memoize  → remembers a MAP of previous results
 *   curry    → remembers COLLECTED ARGS until there are enough
 *   once     → remembers a CALLED FLAG + the cached RESULT
 *   debounce → remembers a TIMER ID to cancel/reset
 *
 * That's it. Same skeleton, four different memories.
 * Read each solution below with this in mind.
 */

// ════════════════════════════════════════
// PART 1 — THEORY & PREDICTIONS
// ════════════════════════════════════════
// All predictions were correct (22/25).
// No code changes needed — just a note on Q7.

console.log("\n=== Part 1 — Theory & Predictions ===")

// Q1 — Q6: all correct ✓

// Q7: mystery() — the precise one-liner description:
// "Groups array elements into an object keyed by the return value of fn."
// This pattern is called groupBy — you'll use it constantly in React
// when grouping data for rendering (e.g. orders by status, posts by category).

const mystery = (arr, fn) =>
  arr.reduce((acc, val) => {
    const key = fn(val)
    if (!acc[key]) acc[key] = []
    acc[key].push(val)
    return acc
  }, {})

const people = ["Alice", "Bob", "Anna", "Brian", "Charlie"]
const grouped = mystery(people, (name) => name[0])
console.log(grouped) // { A: ['Alice','Anna'], B: ['Bob','Brian'], C: ['Charlie'] }
console.log(grouped["A"]) // ['Alice', 'Anna']
console.log(grouped["B"].length) // 2

// ════════════════════════════════════════
// PART 2 — ARRAY METHODS
// ════════════════════════════════════════

console.log("\n=== Part 2 — Array Methods ===")

// ── C1 — unique (4/4) ✓ ─────────────────
// Your solution was correct. No changes.
/**
 * Returns a new array with only unique values, preserving order of first appearance.
 * @param {Array} arr array of integers.
 * @returns {Array} deduplicated array.
 */
const unique = (arr) =>
  arr.reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item)
    return acc
  }, [])

console.log("--- C1: unique ---")
console.log(unique([1, 2, 1, 3, 2, 4])) // [1, 2, 3, 4]
console.log(unique([5, 5, 5])) // [5]
console.log(unique([])) // []

// ── C2 — countOccurrences (4/4) ✓ ───────
// Your solution was correct. No changes.
/**
 * Counts occurrences of each element in an array.
 * @param {Array} arr array of strings or numbers.
 * @returns {Object} { element: count }
 */
const countOccurrences = (arr) =>
  arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

console.log("\n--- C2: countOccurrences ---")
console.log(countOccurrences(["a", "b", "a", "c", "b", "a"])) // { a:3, b:2, c:1 }
console.log(countOccurrences([])) // {}

// ── C3 — deepFlat (4/5) → Fixed ─────────
// BUG: typeof num === "number" breaks for arrays of strings/booleans.
// FIX: use Array.isArray() — if it's an array, recurse; otherwise push.
/**
 * Flattens a nested array of any depth without using Array.flat().
 * @param {Array} arr nested array of any depth.
 * @returns {Array} fully flattened array.
 */
const deepFlat = (arr) =>
  arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      // item is a nested array — recurse and spread results in
      acc.push(...deepFlat(item))
    } else {
      // item is a leaf value (number, string, boolean, etc.)
      acc.push(item)
    }
    return acc
  }, [])

console.log("\n--- C3: deepFlat ---")
console.log(deepFlat([1, [2, [3, [4]], 5]])) // [1,2,3,4,5]
console.log(deepFlat([1, 2, 3])) // [1,2,3]
console.log(deepFlat([])) // []
console.log(deepFlat(["a", ["b", ["c"]]])) // ['a','b','c'] — now works for strings too
console.log(deepFlat([true, [false, [true]]])) // [true,false,true] — booleans too

// ── C4 — graduates (4/4) ✓ ──────────────
// Your solution was correct and well-tested. No changes.
/**
 * Returns students who passed (score >= 60), sorted by score descending,
 * with only name and score properties.
 * @param {Array} arr array of student objects.
 * @returns {Array} filtered, sorted, projected array.
 */
const graduates = (arr) =>
  arr
    .filter((s) => s.score >= 60)
    .map((s) => ({ name: s.name, score: s.score }))
    .sort((a, b) => b.score - a.score)

const students = [
  { name: "Alice", score: 90, age: 20 },
  { name: "Bob", score: 45, age: 22 },
  { name: "Carol", score: 75, age: 19 },
  { name: "Dave", score: 60, age: 21 },
]
console.log("\n--- C4: graduates ---")
console.log(graduates(students))
// [{ name:'Alice', score:90 }, { name:'Carol', score:75 }, { name:'Dave', score:60 }]

// ── C5 — myMap (5/5) ✓ ──────────────────
// Your solution was correct. No changes.
/**
 * Custom implementation of Array.prototype.map using for...of.
 * @param {Array} arr any array.
 * @param {Function} fnc transformation function.
 * @returns {Array} mapped array.
 */
const myMap = (arr, fnc) => {
  const result = []
  for (const element of arr) {
    result.push(fnc(element))
  }
  return result
}

console.log("\n--- C5: myMap ---")
console.log(myMap([1, 2, 3], (x) => x * 2)) // [2,4,6]
console.log(myMap(["a", "b"], (s) => s.toUpperCase())) // ['A','B']
console.log(myMap([], (x) => x)) // []

// ── C6 — stats (2/4) → Fixed ────────────
// BUG 1: Math.floor instead of toFixed(2) — lost decimal precision.
// BUG 2: Math.min/Math.max called outside reduce — two extra passes.
// FIX: compute everything inside a single reduce.
//      Use Infinity/-Infinity as initial min/max.
//      Calculate avg on the last iteration using the index + array reference.
/**
 * Returns min, max, avg (2dp), and sum of a number array in a single reduce pass.
 * @param {Array} arr array of numbers.
 * @returns {Object} { min, max, avg, sum }
 */
const stats = (arr) => {
  if (arr.length === 0) return {}

  return arr.reduce(
    (acc, n, i, src) => {
      // running sum — same as before
      acc.sum += n
      // in-reduce min/max — no separate Math.min/max pass needed
      if (n < acc.min) acc.min = n
      if (n > acc.max) acc.max = n
      // compute avg only on the final iteration (i === last index)
      if (i === src.length - 1) {
        acc.avg = parseFloat((acc.sum / src.length).toFixed(2))
      }
      return acc
    },
    { min: Infinity, max: -Infinity, sum: 0, avg: 0 },
  )
}

console.log("\n--- C6: stats ---")
console.log(stats([3, 1, 4, 1, 5, 9])) // { min:1, max:9, avg:3.83, sum:23 } ✓
console.log(stats([10])) // { min:10, max:10, avg:10, sum:10 }
console.log(stats([12, -5, 33, 10])) // { min:-5, max:33, avg:12.5, sum:50 }
console.log(stats([])) // {}

// ── C7 — sameElements (4/4) ✓ ───────────
// Your Map-based approach is optimal O(n). No changes.
/**
 * Returns true if both arrays contain the same elements (order-independent, duplicates matter).
 * @param {Array} arrOne any array.
 * @param {Array} arrTwo any array.
 * @returns {Boolean}
 */
const arrToMap = (arr) => {
  const map = new Map()
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1)
  }
  return map
}

const sameElements = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) return false
  const mapOne = arrToMap(arrOne)
  const mapTwo = arrToMap(arrTwo)
  for (const [key, value] of mapOne.entries()) {
    if (mapTwo.get(key) !== value) return false
  }
  return true
}

console.log("\n--- C7: sameElements ---")
console.log(sameElements([1, 2, 3], [3, 2, 1])) // true
console.log(sameElements([1, 2, 2], [2, 1, 2])) // true
console.log(sameElements([1, 2, 3], [1, 2, 4])) // false
console.log(sameElements([1, 2], [1, 2, 3])) // false

// ════════════════════════════════════════
// PART 3 — FUNCTIONS DEEP DIVE
// ════════════════════════════════════════
// This is where the closure skeleton applies.
// Read the comment before each function carefully.

console.log("\n=== Part 3 — Functions Deep Dive ===")

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THE CLOSURE SKELETON — keep this in mind:
//
//   const pattern = (config) => {
//     let MEMORY = ...        ← what to remember
//     return (...args) => {
//       // use or update MEMORY
//     }
//   }
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── F1 — memoize (0/4) → Fixed ──────────
// YOUR VERSION: (x) => fn(x) — just delegates, no memory at all.
//
// CLOSURE MEMORY: a Map of { argument → result }
//   When called with an argument we've seen → return from Map (fn NOT called)
//   When called with a new argument → call fn, store result in Map, return it
//
// WHY MAP? Because Map keys can be any type (numbers, objects, etc.)
// A plain object would stringify keys, breaking for non-string args.
/**
 * Returns a memoized version of fn that caches results by argument.
 * Subsequent calls with the same argument return the cached value
 * without invoking fn again.
 * @param {Function} fn any single-argument function.
 * @returns {Function} memoized function.
 */
const memoize = (fn) => {
  // MEMORY: Map of previously seen argument → result pairs
  const cache = new Map()

  return (x) => {
    if (cache.has(x)) {
      console.log(`  [cache hit] ${x}`)
      return cache.get(x) // return stored result — fn NOT called
    }
    console.log(`  [computing] ${x}`)
    const result = fn(x)
    cache.set(x, result) // store for future calls
    return result
  }
}

const slowDouble = (n) => n * 2
const fastDouble = memoize(slowDouble)

console.log("--- F1: memoize ---")
console.log(fastDouble(5)) // [computing] 10
console.log(fastDouble(5)) // [cache hit] 10 — fn NOT called again
console.log(fastDouble(3)) // [computing] 6
console.log(fastDouble(5)) // [cache hit] 10
// Notice: "computing" only appears twice (for 5 and 3), not three times

// ── F2 — pipe (4/4) ✓ ───────────────────
// Your solution was PERFECT. This is exactly how pipe is written in production.
// The reduce accumulates a composed function, starting with identity (x) => x.
// Each step wraps the previous result: (x) => nextFn(fn(x))
// This IS a closure — the inner arrow closes over fn and nextFn.
/**
 * Composes functions left to right. Output of each becomes input of the next.
 * @param {...Function} fns functions to compose.
 * @returns {Function} composed function.
 */
const pipe = (...fns) =>
  fns.reduce(
    (fn, nextFn) => (x) => nextFn(fn(x)),
    (x) => x, // identity: starting point
  )

const process = pipe(
  (x) => x * 2,
  (x) => x + 1,
  (x) => x ** 2,
)

console.log("\n--- F2: pipe ---")
console.log(process(3)) // ((3*2)+1)^2 = 49
console.log(process(0)) // ((0*2)+1)^2 = 1
console.log(process(15)) // ((15*2)+1)^2 = 961

// ── F3 — curry (0/5) → Fixed ────────────
// YOUR VERSION: (...args) => fn(...args) — just calls fn immediately with all args.
// curriedAdd(1) returns NaN (1+undefined+undefined), not a function. Can't chain.
//
// CLOSURE MEMORY: the COLLECTED ARGS so far
//   Each call adds more args to the collection.
//   When we have enough (args.length >= fn.length), call fn.
//   Otherwise return another function that collects more.
//
// KEY INSIGHT: fn.length is the number of parameters fn declares.
//   const add = (a, b, c) => a + b + c  →  add.length === 3
//   curry knows to wait until it has 3 args total before calling.
/**
 * Transforms a multi-argument function into a chain of single-argument functions.
 * Supports partial application: curriedAdd(1)(2)(3) or curriedAdd(1,2)(3).
 * @param {Function} fn function with fn.length declared parameters.
 * @returns {Function} curried version of fn.
 */
const curry = (fn) => {
  const arity = fn.length // how many args fn needs (e.g. 3 for add(a,b,c))

  // MEMORY: the args collected so far (grows with each call)
  return function curried(...args) {
    if (args.length >= arity) {
      // Have enough args — call the original function
      return fn(...args)
    }
    // Not enough yet — return a function that collects more
    // The new call's args are merged with previously collected args
    return (...moreArgs) => curried(...args, ...moreArgs)
    //                              ^^^^^ closure over previously collected args
  }
}

const add = (a, b, c) => a + b + c
const curriedAdd = curry(add)

console.log("\n--- F3: curry ---")
console.log(curriedAdd(1)(2)(3)) // 6  — one arg at a time
console.log(curriedAdd(10)(20)(30)) // 60
console.log(curriedAdd(1, 2)(3)) // 6  — partial application also works
console.log(curriedAdd(1)(2, 3)) // 6
console.log(curriedAdd(1, 2, 3)) // 6  — all at once still works

// Another example to feel it:
const multiply = (a, b) => a * b
const curriedMultiply = curry(multiply)
const double = curriedMultiply(2) // partially applied — "double" is now a function
const triple = curriedMultiply(3) // partially applied — "triple" is now a function
console.log(double(5)) // 10
console.log(triple(5)) // 15
// This is the factory pattern from ch5-study.js — same idea, expressed differently

// ── F4 — once (2/4) → Fixed ─────────────
// YOUR VERSION: if (++iterator === 1) fn() — logic correct but return value lost.
// fn() was called but its return value was discarded. increment() returned undefined.
//
// CLOSURE MEMORY: a CALLED FLAG (boolean) + the CACHED RESULT
//   First call: run fn, store result in memory, set flag to true, return result
//   Every subsequent call: flag is true → skip fn, return cached result directly
/**
 * Wraps fn so it only executes once. All subsequent calls return the first result.
 * @param {Function} fn any function.
 * @returns {Function} once-guarded version of fn.
 */
const once = (fn) => {
  // MEMORY: whether fn has been called + what it returned
  let called = false
  let result

  return (...args) => {
    if (!called) {
      called = true
      result = fn(...args) // store the return value
    }
    return result // always return it (cached after first call)
  }
}

let count = 0
const increment = once(() => ++count)

console.log("\n--- F4: once ---")
console.log(increment()) // 1 — fn runs, count becomes 1
console.log(increment()) // 1 — fn does NOT run, returns cached 1
console.log(increment()) // 1 — same
console.log(count) // 1 — count was only incremented once ✓

// Real-world use: initialise something expensive only once
const initDB = once(() => {
  console.log("  DB connection opened (should appear only once)")
  return { connected: true }
})
console.log(initDB()) // opens connection, returns { connected: true }
console.log(initDB()) // skips, returns same object
console.log(initDB()) // skips, returns same object

// ── F5 — flattenRecursive + flattenReduce (4/4) ✓ ────
// Both of your solutions were correct. Reproduced with minor cleanup.

/**
 * Flattens array recursively using head/rest destructuring and spread.
 * No loops — pure recursion.
 * @param {Array} arr nested array.
 * @returns {Array} flat array.
 */
const deepFlatWithSpread = (arr) => {
  if (arr.length === 0) return []
  const [first, ...rest] = arr
  if (Array.isArray(first)) {
    // first is itself an array — flatten it, then continue with rest
    return deepFlatWithSpread(first.concat(rest))
  }
  // first is a leaf — keep it, recurse on rest
  return [first, ...deepFlatWithSpread(rest)]
}

/**
 * Flattens array using reduce + recursion.
 * @param {Array} arr nested array.
 * @returns {Array} flat array.
 */
const deepFlatWithReduce = (arr) =>
  arr.reduce((acc, item) => {
    Array.isArray(item) ? acc.push(...deepFlatWithReduce(item)) : acc.push(item)
    return acc
  }, [])

console.log("\n--- F5: flatten variants ---")
console.log(deepFlatWithSpread([1, [2, [3, [4]], 5]])) // [1,2,3,4,5]
console.log(deepFlatWithReduce([1, [2, [3, [4]], 5]])) // [1,2,3,4,5]
console.log(deepFlatWithSpread([])) // []

// ── F6 — debounce (1/4) → Fixed ─────────
// YOUR VERSION: setTimeout(fn(msg), delay) — executes fn immediately.
// setTimeout takes a FUNCTION as first arg, not a function's return value.
// fn(msg) calls fn right away and passes undefined (its return value) to setTimeout.
//
// CLOSURE MEMORY: a TIMER ID
//   Each call to the debounced function cancels the previous timer
//   and schedules a fresh one. fn only runs if no new call arrives
//   before the delay expires.
//
// REAL WORLD: search input — don't hit the API on every keystroke,
// only after the user pauses typing for 300ms.
/**
 * Delays fn until after delay ms have passed since the last call.
 * If called again before the delay expires, resets the timer.
 * @param {Function} fn function to debounce.
 * @param {Number} delay milliseconds to wait.
 * @returns {Function} debounced function.
 */
const debounce = (fn, delay) => {
  // MEMORY: the ID of the currently scheduled timer
  let timer

  return (...args) => {
    clearTimeout(timer) // cancel any pending call
    timer = setTimeout(() => fn(...args), delay) // schedule fresh call
    //                  ^^^ arrow function wraps fn — it runs AFTER delay, not now
  }
}

console.log("\n--- F6: debounce ---")
const log = debounce((msg) => console.log("  fired:", msg), 150)

// Simulate rapid calls — only the last one should fire
setTimeout(() => log("a"), 0) // scheduled, then cancelled
setTimeout(() => log("b"), 50) // scheduled, then cancelled
setTimeout(() => log("c"), 100) // scheduled, fires after 150ms silence
// Expected output (after ~250ms): "  fired: c"

// Verify: calls that arrive after the delay DO fire independently
setTimeout(() => log("d"), 400) // new burst — fires after 150ms
// Expected output (after ~550ms): "  fired: d"

// ════════════════════════════════════════
// PART 4 — COMBINED CHALLENGES
// ════════════════════════════════════════

console.log("\n=== Part 4 — Combined Challenges ===")

// ── X1 — pipeline (4/6) → Fixed ─────────
// BUG: byCategory stored full product objects instead of names only.
// FIX: add .map(p => p.name) after grouping each category.
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
 * Processes a product dataset using only array methods.
 * Returns available products, category groups (names only), total stock value, and cheapest item.
 * @param {Array} arr array of product objects.
 * @returns {Object} { available, byCategory, totalValue, cheapest }
 */
const pipeline = (arr) => {
  // products with stock > 0, sorted by price descending
  const available = arr.filter((p) => p.stock > 0).sort((a, b) => b.price - a.price)

  // group ALL products by category — names only (not full objects)
  const byCategory = arr.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = []
    acc[p.category].push(p.name) // ← names only, not full object
    return acc
  }, {})

  // sum of price * stock for available products only
  const totalValue = available.reduce((acc, p) => acc + p.price * p.stock, 0)

  // cheapest available — last item after sorting descending
  const cheapest = available[available.length - 1]

  return { available, byCategory, totalValue, cheapest }
}

console.log("--- X1: pipeline ---")
const result = pipeline(products)
console.log(
  "available:",
  result.available.map((p) => p.name),
)
// ['Laptop','Monitor','Desk','Chair','Keyboard']
console.log("byCategory:", result.byCategory)
// { tech: ['Laptop','Phone','Monitor','Tablet','Keyboard'], furniture: ['Desk','Chair'] }
console.log("totalValue:", result.totalValue) // 11500
console.log("cheapest:", result.cheapest) // { name: 'Keyboard', ... }

// ── X2 — makeValidator (5/7) → Fixed ────
// BUG: hardcoded { name, age, email } destructuring — only works for those keys.
// FIX: iterate Object.entries(rules) so it works for ANY rule set.
/**
 * Creates a validator from a rules object.
 * Each rule is a function that returns true if the field is valid.
 * @param {Object} rules { fieldName: validatorFn }
 * @returns {Function} validate(data) → { valid: boolean, errors: string[] }
 */
const makeValidator = (rules) => (data) => {
  // iterate rules dynamically — works for any keys, not just name/age/email
  const errors = Object.entries(rules)
    .filter(([key, ruleFn]) => !ruleFn(data[key]))
    .map(([key]) => key)

  return { valid: errors.length === 0, errors }
}

const validator = makeValidator({
  name: (v) => typeof v === "string" && v.length >= 2,
  age: (v) => typeof v === "number" && v >= 18 && v <= 120,
  email: (v) => typeof v === "string" && v.includes("@"),
})

console.log("\n--- X2: makeValidator ---")
console.log(validator({ name: "Y", age: 25, email: "y@x.com" }))
// { valid: false, errors: ['name'] }
console.log(validator({ name: "Yoandy", age: 25, email: "y@x.com" }))
// { valid: true, errors: [] }
console.log(validator({ name: "Y", age: 15, email: "notanemail" }))
// { valid: false, errors: ['name','age','email'] }

// Bonus: works with any field set — not locked to name/age/email
const productValidator = makeValidator({
  title: (v) => typeof v === "string" && v.length > 0,
  price: (v) => typeof v === "number" && v > 0,
  category: (v) => ["tech", "furniture", "clothing"].includes(v),
})
console.log(productValidator({ title: "", price: -5, category: "food" }))
// { valid: false, errors: ['title','price','category'] }

// ── X3 — createEmitter (5/7) → Fixed ────
// BUG: stored [listener, emitted, isOnce] — only one listener per event.
//      A second on("say", fn2) would be silently ignored.
// FIX: store an ARRAY of listeners per event. Each listener can be removed
//      independently. once() wraps the listener in a self-removing wrapper.
/**
 * Creates a simple event emitter supporting on, off, emit, and once.
 * Multiple listeners per event are supported.
 * @returns {{ on, off, emit, once }}
 */
const createEmitter = () => {
  // MEMORY: object mapping event names to arrays of listener functions
  const events = {}

  return {
    /**
     * Subscribes a listener to an event.
     * @param {String} event event name.
     * @param {Function} listener callback function.
     */
    on(event, listener) {
      if (!events[event]) events[event] = []
      events[event].push(listener)
    },

    /**
     * Unsubscribes a specific listener from an event.
     * @param {String} event event name.
     * @param {Function} listener the exact function to remove.
     */
    off(event, listener) {
      if (!events[event]) return
      // filter out the specific listener — others remain subscribed
      events[event] = events[event].filter((fn) => fn !== listener)
    },

    /**
     * Calls all listeners for the event with the given args.
     * @param {String} event event name.
     * @param {...*} args arguments passed to each listener.
     */
    emit(event, ...args) {
      if (!events[event]) return
      // call every subscribed listener
      events[event].forEach((fn) => fn(...args))
    },

    /**
     * Subscribes a listener that auto-unsubscribes after its first emit.
     * @param {String} event event name.
     * @param {Function} listener callback function.
     */
    once(event, listener) {
      // wrap listener in a self-removing function
      const wrapper = (...args) => {
        listener(...args)
        this.off(event, wrapper) // remove wrapper (not original listener) after firing
      }
      this.on(event, wrapper)
    },
  }
}

console.log("\n--- X3: createEmitter ---")
const emitter = createEmitter()

const greet = (name) => console.log(`Hello, ${name}!`)
emitter.on("say", greet)
emitter.emit("say", "Yoandy") // Hello, Yoandy!
emitter.emit("say", "Kevin") // Hello, Kevin!
emitter.off("say", greet)
emitter.emit("say", "Alice") // (nothing — unsubscribed)

const onceHi = (name) => console.log(`Hi once, ${name}!`)
emitter.once("greet", onceHi)
emitter.emit("greet", "Bob") // Hi once, Bob!
emitter.emit("greet", "Dan") // (nothing — auto-unsubscribed)

// Bonus: multiple listeners for the same event
const emitter2 = createEmitter()
emitter2.on("data", (x) => console.log("  listener A:", x))
emitter2.on("data", (x) => console.log("  listener B:", x * 2))
emitter2.emit("data", 5)
// listener A: 5
// listener B: 10

// ════════════════════════════════════════
// CLOSURE CHEATSHEET — reference card
// ════════════════════════════════════════
/*
  Every advanced function pattern = closure skeleton + different memory

  ┌──────────┬──────────────────────────┬────────────────────────────────┐
  │ Pattern  │ What it closes over      │ What it does with memory       │
  ├──────────┼──────────────────────────┼────────────────────────────────┤
  │ memoize  │ Map of arg → result      │ Read before compute, write after│
  │ curry    │ Args collected so far    │ Accumulate until fn.length met  │
  │ once     │ called flag + result     │ Guard the call, cache result    │
  │ debounce │ Timer ID                 │ Cancel old timer, set new one   │
  │ pipe     │ Composed fn chain        │ Thread output → input (yours ✓) │
  └──────────┴──────────────────────────┴────────────────────────────────┘

  The skeleton (memorise this):

    const pattern = (config) => {
      let memory = ...         // ← declared once, lives forever
      return (...args) => {    // ← this function closes over memory
        // read/update memory
        // do the work
      }
    }

  Your pipe() was already this. You wrote it perfectly.
  memoize, curry, once, debounce are the same idea.
*/
