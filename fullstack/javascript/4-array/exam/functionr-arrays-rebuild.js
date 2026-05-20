// ════════════════════════════════════════
// PART 3 — FUNCTIONS DEEP DIVE (25 pts)
// ════════════════════════════════════════

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
  // 1. Create empty cache - map
  let cache = new Map()
  return (num) => {
    if (!cache.has(num)) {
      const result = fn(num)
      cache.set(num, result)
      return result
    } else {
      return cache.get(num)
    }
  }
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
 * @param {Function} fn Any function with N arguments
 */
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return (...arg) => curried(...args, ...arg)
    }
  }
}

// --- Test Cases ---
console.log("--- Challenge 3  Running Tests ---")
const add = (a, b, c) => a + b + c
const curriedAdd = curry(add)
console.log(curriedAdd(1)(2)(3)) // 6  — one arg at a time
console.log(curriedAdd(10)(20)(30)) // 60
console.log(curriedAdd(1, 2)(3)) // 6  — partial application also works
console.log(curriedAdd(1)(2, 3)) // 6
console.log(curriedAdd(1, 2, 3)) // 6  — all at once still works
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
  let called = false
  let result
  return () => {
    if (!called) {
      result = fn()
      called = true
    }
    return result
  }
}

// --- Test Cases ---
console.log("--- Challenge 4  Running Tests ---")
let count = 0
const increment = once(() => ++count)
increment() //→ 1
console.log(count) //→ 1
increment() //→ 1  (not 2 — fn not called again)
increment() //→ 1
console.log(count) //→ 1
console.log("\n====================================")

// Real-world use: initialise something expensive only once
const initDB = once(() => {
  console.log("  DB connection opened (should appear only once)")
  return { connected: true }
})
console.log(initDB()) // opens connection, returns { connected: true }
console.log(initDB()) // skips, returns same object
console.log(initDB()) // skips, returns same object

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
  // 1. available: [...],   // products with stock > 0, sorted by price descending
  const available = arr.filter((products) => products.stock > 0).sort((a, b) => b.price - a.price)
  // 2.  byCategory: { tech: [...], furniture: [...] }, // grouped by category (names only)
  const byCategory = arr.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product.name)
    return acc
  }, {})
  // 3. totalValue: number, // sum of (price * stock) for available products only
  const totalValue = available.reduce((acc, products) => acc + products.price * products.stock, 0)
  // 4. cheapest: object,   // the cheapest available product (full object)
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
