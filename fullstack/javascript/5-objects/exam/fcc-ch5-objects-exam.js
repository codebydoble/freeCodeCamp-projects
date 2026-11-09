/**
 * ════════════════════════════════════════
 * freeCodeCamp Chapter 5 — OBJECTS
 * MASTERY EXAM
 * ════════════════════════════════════════
 * Student: Yoandy Doble Herrera
 * Date: 08/06/2026 - 22/06/2026
 * Start: 08:47  End: 16:48
 *
 * RULES:
 * - Vanilla JS only. No libraries.
 * - Write JSDoc for every function.
 * - Test every function with at least 2 console.log calls.
 * - Do not mutate input objects unless explicitly asked.
 * - Run with: node fcc-ch5-objects-exam.js
 *
 * STRUCTURE:
 * Part 1 — Theory & Predictions   (20 pts)
 * Part 2 — Object Fundamentals    (25 pts)
 * Part 3 — Real-World Patterns    (30 pts)
 * Part 4 — Combined Challenges    (25 pts)
 * ────────────────────────────────────────
 * Total: 100 pts  |  Passing: 75 pts
 * ════════════════════════════════════════
 */

// ════════════════════════════════════════
// PART 1 — THEORY & PREDICTIONS (20 pts)
// ════════════════════════════════════════
// Write your prediction as a comment BEFORE running each block.
// Award yourself points only if you predicted correctly.
"use strict"
console.log("\n=== Part 1 — Theory & Predictions ===")

// ── Q1 (4 pts) ───────────────────────────
console.log("\n<<<===>>> Question 1 <<<===>>>\n")
// Predict the output of each line.
const user = { name: "Yoandy", role: "developer", active: true }

console.log(user.name) // Your prediction: Yoandy
console.log(user["role"]) // Your prediction: developer
console.log(user.age) // Your prediction: undefined
console.log("active" in user) // Your prediction: true

// ── Q2 (4 pts) ───────────────────────────
console.log("\n<<<===>>> Question 2 <<<===>>>\n")
// Predict what gets logged. Think about reference vs copy.
const original = { x: 1, y: 2 }
const copied = original
copied.x = 99
console.log(original.x) // Your prediction: 99

const spread = { ...original }
spread.y = 50
console.log(original.y) // Your prediction: 2
console.log(original === copied) // Your prediction: true
console.log(original === spread) // Your prediction: false

// ── Q3 (4 pts) ───────────────────────────
console.log("\n<<<===>>> Question 3 <<<===>>>\n")
// Predict the output. Think about Object methods.
const car = { brand: "Mazda", year: 2024, color: "red" }
console.log(Object.keys(car)) // Your prediction: [brand, year, color]
console.log(Object.values(car)) // Your prediction: ["Mazda",2024,"red"]
console.log(Object.entries(car).length) // Your prediction: 3

delete car.color
console.log("color" in car) // Your prediction: false

// ── Q4 (4 pts) ───────────────────────────
console.log("\n<<<===>>> Question 4 <<<===>>>\n")
// Predict the output. Think about nested access and optional chaining.
const company = {
  name: "TechCorp",
  address: {
    city: "Guadalajara",
    country: "Mexico",
  },
}
console.log(company.address.city) // Your prediction: Guadalajara
console.log(company.address.zip) // Your prediction: undefined
console.log(company.ceo?.name) // Your prediction: undefined
console.log(company.address?.city?.length) // Your prediction: 11

// ── Q5 (4 pts) ───────────────────────────
console.log("\n<<<===>>> Question 5 <<<===>>>\n")
// Predict the output. Think about destructuring and defaults.
const { name, role = "viewer", score = 0 } = { name: "Alice", role: "admin" }
console.log(name) // Your prediction: Alice
console.log(role) // Your prediction: admin
console.log(score) // Your prediction: 0

const { address: { city } = {} } = company
console.log(city) // Your prediction: Guadalajara

// ════════════════════════════════════════
// PART 2 — OBJECT FUNDAMENTALS (25 pts)
// ════════════════════════════════════════

console.log("\n=== Part 2 — Object Fundamentals ===")

// ── O1 (4 pts) ───────────────────────────
console.log("\n<<<===>>> Object 1 <<<===>>>\n")
/**
 * Write a function mergeObjects(obj1, obj2) that returns a NEW object
 * combining both objects. If the same key exists in both, obj2's value wins.
 * Must not mutate either input.
 *
 * mergeObjects({a:1, b:2}, {b:3, c:4}) → {a:1, b:3, c:4}
 * mergeObjects({x:10}, {y:20})         → {x:10, y:20}
 */
// Your solution:
/**
 * Function that returns a NEW object combining both objects. If the same key exists in both, obj2's value wins. Must not mutate either input.
 * @param {Object} obj1 any object.
 * @param {Object} obj2 any object.
 * @returns {Object} a NEW object combining both objects.
 */
const mergeObjects = (obj1, obj2) => {
  let merged = Object.create(null)
  // 1. spread obj1
  merged = { ...obj1 }
  // 2. add obj 2. If the same key exists in both, obj2's value wins.
  for (const [key, value] of Object.entries(obj2)) {
    merged[key] = value
  }
  // BETTER APROACH
  // return { ...obj1, ...obj2 }  If the same key exists in both, obj2's value wins.
  return merged
}

const mergeQ1E1 = mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }) // {a:1, b:3, c:4}
console.log(">>>Merge: ", mergeQ1E1)
const mergeQ1E2 = mergeObjects({ x: 10 }, { y: 20 }) // {x:10, y:20}
console.log(">>>Merge: ", mergeQ1E2, "\n")
// ── O2 (5 pts) ───────────────────────────
console.log("\n<<<===>>> Object 2 <<<===>>>\n")
/**
 * Write a function pick(obj, keys) that returns a NEW object containing
 * only the properties whose names are in the keys array.
 * If a key doesn't exist on obj, skip it silently.
 *
 * pick({a:1, b:2, c:3}, ["a","c"])  → {a:1, c:3}
 * pick({x:10, y:20}, ["x","z"])     → {x:10}
 * pick({}, ["a"])                    → {}
 */
// Your solution:

/**
 * Function that returns a NEW object containing only the properties whose names are in the keys array.
 * If a key doesn't exist on obj, skip it silently.
 * @param {Object} obj any object.
 * @param {Array} keys any keys array.
 * @returns {Object} a NEW object containing only the properties whose names are in the keys array.
 */
const pick = (obj, keys) => {
  // BETTER APROACH use reduce
  const picked = {}
  // 1. checks empty keys
  if (keys.length === 0) return {}
  // 2. checks empty obj
  if (Object.entries(obj).length === 0) return {}
  // 3. loop keys and add into picked
  for (const key of keys) {
    if (key in obj) {
      picked[key] = obj[key]
    }
  }
  return picked
}

const pickQ2P1 = pick({ a: 1, b: 2, c: 3 }, ["a", "c"]) // {a:1, c:3}
const pickQ2P2 = pick({ x: 10, y: 20 }, ["x", "z"]) //{x:10}
const pickQ2P3 = pick({}, ["a"]) // {}
console.log(">>>PICK:  ", pickQ2P1)
console.log(">>>PICK:  ", pickQ2P2)
console.log(">>>PICK:  ", pickQ2P3, "\n")

// ── O3 (4 pts) ───────────────────────────
console.log("\n<<<===>>> Object 3 <<<===>>>\n")
/**
 * Write a function omit(obj, keys) — the opposite of pick.
 * Returns a NEW object with all properties EXCEPT those in keys.
 *
 * omit({a:1, b:2, c:3}, ["b"])     → {a:1, c:3}
 * omit({x:10, y:20, z:30}, ["x","z"]) → {y:20}
 */
// Your solution:

/**
 * Function omit(obj, keys) — the opposite of pick.
 * Returns a NEW object with all properties EXCEPT those in keys.
 * @param {Object} obj any object.
 * @param {String[]} keys any keys array.
 * @returns {Object}
 */
const omit = (obj, keys) => {
  let omitted = {}
  // 1. checks empty keys
  if (keys.length === 0) return obj
  // 2. checks empty obj
  if (Object.entries(obj).length === 0) return {}
  // 3. loops obj and test keys includes
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      omitted[key] = value
    }
  }
  return omitted
}

const omitQ3P1 = omit({ a: 1, b: 2, c: 3 }, ["b"]) // {a:1, c:3}
const omitQ3P2 = omit({ x: 10, y: 20, z: 30 }, ["x", "z"]) // {y:20}
console.log(">>>OMIT:  ", omitQ3P1)
console.log(">>>OMIT:  ", omitQ3P2, "\n")

// ── O4 (5 pts) ───────────────────────────
console.log("\n<<<===>>> Object 4 <<<===>>>\n")
/**
 * Write a function invertObject(obj) that swaps all keys and values.
 * Assume all values are strings or numbers (safe to use as keys).
 *
 * invertObject({a:"x", b:"y"}) → {x:"a", y:"b"}
 * invertObject({1:"one", 2:"two"}) → {one:"1", two:"2"}
 *
 * Note: Object keys are always strings — think about what happens to number values.
 */
// Your solution:

/**
 * function invertObject(obj) that swaps all keys and values.
 * Assume all values are strings or numbers (safe to use as keys).
 * @param {Object} obj
 * @returns {Object}
 */
const invertObject = (obj) => {
  let inverted = {}
  for (const [key, value] of Object.entries(obj)) {
    inverted[value.toString()] = key
  }
  return inverted
}

const invertQ4P1 = invertObject({ a: "x", b: "y" }) // {x:"a", y:"b"}
const invertQ4P2 = invertObject({ 1: "one", 2: "two" }) // {one:"1", two:"2"}
const invertQ4P3 = invertObject({ a: "zz", b: "y", 23: 50 }) // { '50': '23', zz: 'a', y: 'b' }
console.log(">>>INVERT:  ", invertQ4P1)
console.log(">>>INVERT:  ", invertQ4P2)
console.log(">>>INVERT:  ", invertQ4P3, "\n")

// ── O5 (7 pts) ───────────────────────────
console.log("\n<<<===>>> Object 5 <<<===>>>\n")
/**
 * Write a function deepClone(obj) that creates a fully independent deep copy
 * of an object (including nested objects and arrays).
 * Do NOT use JSON.parse/JSON.stringify or structuredClone().
 * Implement it yourself using recursion.
 *
 * const a = { x: 1, nested: { y: 2 } }
 * const b = deepClone(a)
 * b.nested.y = 99
 * console.log(a.nested.y) // 2 — original untouched
 *
 * Hint: check Array.isArray() first, then typeof === "object"
 */
// Your solution:

/**
 * Function deepClone(obj) that creates a fully independent deep copy of an object (including nested objects and arrays). Use recursion.
 * @param {Object} obj
 */
const deepClone = (obj) => {
  return Object.entries(obj).reduce((clone, elementArr) => {
    let [key, value] = elementArr
    if (!Array.isArray(value)) {
      if (typeof value === "object" && value !== null) {
        clone[key] = deepClone(value)
        return clone
      }
    }
    clone[key] = value
    return clone
  }, {})
}
const a = { x: 1, nested: { y: 2 } }
const b = deepClone(a)
b.nested.y = 99
console.log(">>> DeepClone original", a) // original untouched
console.log(">>> DeepClone b", b) // cloned
console.log(a.nested.y) // 2 — original untouched

// ════════════════════════════════════════
// PART 3 — REAL-WORLD PATTERNS (30 pts)
// ════════════════════════════════════════

console.log("\n=== Part 3 — Real-World Patterns ===")

// ── R1 (6 pts) ───────────────────────────
console.log("\n<<<===>>> Real-World 1 <<<===>>>\n")
/**
 * Write a function groupBy(arr, key) that groups an array of objects
 * by a shared property, returning an object of arrays.
 *
 * const people = [
 *   { name:"Alice", dept:"Engineering" },
 *   { name:"Bob",   dept:"Marketing" },
 *   { name:"Carol", dept:"Engineering" },
 * ]
 * groupBy(people, "dept") →
 * {
 *   Engineering: [{name:"Alice",...}, {name:"Carol",...}],
 *   Marketing:   [{name:"Bob",...}]
 * }
 *
 * This is the mystery() function from Ch.5 Eloquent JS — you've seen this before.
 */
const people = [
  { name: "Alice", dept: "Engineering", salary: 90000, active: true },
  { name: "Bob", dept: "Marketing", salary: 75000, active: false },
  { name: "Carol", dept: "Engineering", salary: 85000, active: true },
  { name: "Dave", dept: "Marketing", salary: 70000, active: false },
  { name: "Eve", dept: "Design", salary: 80000, active: true },
]

/**
 * Function that groups an array of objects by a shared property, returning an object of arrays.
 * @param {Array} arr any array of objects.
 * @param {String} key a shared property.
 * @returns {Object} an object of arrays gruopBy shared property.
 */
const groupBy = (arr, key) => {
  return arr.reduce((groupResult, obj) => {
    if (key in obj) {
      if (obj[key] in groupResult) {
        groupResult[obj[key]].push(obj)
      } else {
        groupResult[obj[key]] = []
        groupResult[obj[key]].push(obj)
      }
    }
    return groupResult
  }, {})
}

const groupR1P1 = groupBy(people, "dept") /* 
{
   Engineering: [{name:"Alice",...}, {name:"Carol",...}],
   Marketing:   [{name:"Bob",...}]
}
*/
const groupR1P2 = groupBy(people, "active") /*
 {
  true: [
    { name: 'Alice', dept: 'Engineering', salary: 90000, active: true },
    { name: 'Carol', dept: 'Engineering', salary: 85000, active: true },
    { name: 'Eve', dept: 'Design', salary: 80000, active: true }
  ],
  false: [
    { name: 'Bob', dept: 'Marketing', salary: 75000, active: false },
    { name: 'Dave', dept: 'Marketing', salary: 70000, active: false }
  ]
} 
*/
console.log(">>>GroupBy:  ", groupR1P1)
console.log(">>>GroupBy:  ", groupR1P2, "\n")
// ── R2 (7 pts) ───────────────────────────
console.log("\n<<<===>>> Real-World 2 <<<===>>>\n")
/**
 * Write a function transformUserData(users) that takes an array of raw user
 * objects and returns a transformed array where:
 * - fullName is added: firstName + " " + lastName
 * - password is removed
 * - isActive is added: true if status === "active", false otherwise
 * - joinedYear is added: just the year from the createdAt date string
 *
 * Input:
 * { firstName:"John", lastName:"Doe", password:"abc123",
 *   status:"active", createdAt:"2023-04-15" }
 * Output:
 * { firstName:"John", lastName:"Doe",
 *   fullName:"John Doe", isActive:true, joinedYear:2023 }
 */
const rawUsers = [
  { firstName: "John", lastName: "Doe", password: "abc123", status: "active", createdAt: "2023-04-15" },
  { firstName: "Jane", lastName: "Smith", password: "xyz789", status: "inactive", createdAt: "2021-11-02" },
  { firstName: "Alice", lastName: "Wong", password: "p4ssw0rd", status: "active", createdAt: "2024-01-30" },
]
// Your solution:

/**
 * Function that takes an array of raw user objects and returns a transformed array where:
 * - fullName is added: firstName + " " + lastName
 * - password is removed
 * - isActive is added: true if status === "active", false otherwise
 * - joinedYear is added: just the year from the createdAt date string
 * @param {Object[]} users any raw user objects.
 * @returns {Object[]} a transformed array like: {
    firstName: 'Alice',
    lastName: 'Wong',
    fullName: 'Alice Wong',
    isActive: true,
    joinedYear: '2024'
  }
 */
const transformUserData = (users) => {
  return users.map((user) => {
    let data = {}
    data["firstName"] = user.firstName
    data["lastName"] = user.lastName
    data["fullName"] = user.firstName + " " + user.lastName
    data["isActive"] = user.status === "active" ? true : false
    data["joinedYear"] = user.createdAt.split("-")[0]
    return data
  })
}

const userData = transformUserData(rawUsers)
console.log(">>>MAP:  ", userData, "\n")

// ── R3 (8 pts) ───────────────────────────
console.log("\n<<<===>>> Real-World 3 <<<===>>>\n")
/**
 * Write a function buildInventoryReport(items) that takes an array of inventory
 * items and returns a summary object using a SINGLE reduce pass.
 *
 * Each item: { name, category, price, quantity }
 * Return:
 * {
 *   totalItems: number,        // sum of all quantities
 *   totalValue: number,        // sum of price * quantity (rounded to 2dp)
 *   byCategory: {              // grouped totals per category
 *     "Electronics": { count: N, value: N },
 *     "Furniture": { count: N, value: N },
 *   },
 *   mostExpensive: object,     // the item with the highest price
 *   outOfStock: string[],      // names of items with quantity === 0
 * }
 */
const inventoryItems = [
  { name: "Laptop", category: "Electronics", price: 1200.35, quantity: 5 },
  { name: "Phone", category: "Electronics", price: 800, quantity: 0 },
  { name: "Desk", category: "Furniture", price: 350, quantity: 3 },
  { name: "Monitor", category: "Electronics", price: 600, quantity: 2 },
  { name: "Chair", category: "Furniture", price: 250, quantity: 0 },
  { name: "Keyboard", category: "Electronics", price: 150.583, quantity: 10 },
]
// Your solution:

/**
 *  Function that takes an array of inventory items and returns a summary object using a SINGLE reduce pass.
 * @param {Object[]} items any array of inventory items.
 * @returns {Object[]} a summary object inventory.
 */
const buildInventoryReport = (items) => {
  return items.reduce(
    /**
     * @param {Object} inv acc of inventory.
     * @param {Object} item current item.
     */
    (inv, item) => {
      // 1. Destructuring inv
      let { totalItems, totalValue, byCategory, mostExpensive, outOfStock } = inv
      // 2. sum of all quantities
      totalItems += item.quantity
      // 3. sum of price * quantity (rounded to 2dp)
      totalValue += Number((item.price * item.quantity).toFixed(2))

      // 4. grouped totals per category
      if (item.category in byCategory) {
        byCategory[item.category].count += 1
        byCategory[item.category].value += parseFloat(Number(item.price * item.quantity).toFixed(2))
      } else {
        byCategory[item.category] = {}
        byCategory[item.category].count = 1
        byCategory[item.category].value = parseFloat(Number(item.price * item.quantity).toFixed(2))
      }
      // 5. the item with the highest price
      if (item.price > mostExpensive.price) {
        mostExpensive = { ...item }
      }
      // 6. names of items with quantity === 0
      if (item.quantity === 0) {
        outOfStock.push(item.name)
      }
      return { totalItems, totalValue: Number(totalValue.toFixed(2)), byCategory, mostExpensive, outOfStock }
    },
    { totalItems: 0, totalValue: 0, byCategory: {}, mostExpensive: { price: -Infinity }, outOfStock: [] },
  )
}

const inventory = buildInventoryReport(inventoryItems)
console.log(">>>REDUCE R3:  ", inventory, "\n")

// ── R4 (9 pts) ───────────────────────────
console.log("\n<<<===>>> Real-World 4 <<<===>>>\n")

/**
 * Function simple state manager — a pattern that powers React's useState.
 * @param {Object} initialState any initial State.
 * @returns {Object} createStore(initialState) returns an object with:
 *   - getState()             → returns current state (a copy, not the original)
 *   - setState(updater)      → updater is a function: prevState → newState
 *   - subscribe(listener)    → registers a callback called on every state change
 *   - unsubscribe(listener)  → removes a listener
 */
const createStore = (initialState) => {
  let state = { ...initialState }
  let listeners = {}
  return {
    /**
     * Function that returns current state (a copy, not the original).
     * @returns {Object} returns current state (a copy, not the original).
     */
    getState() {
      return state
    },
    /**
     * Function (anonymous) to update state. Logs updated status.
     * @param {Function} updater any Function (anonymous) to update state.
     */
    setState(updater) {
      // 1. update state
      state = updater(state)
      // 2. callback
      for (const [, fnc] of Object.entries(listeners)) {
        // 3. console.log("State changed:", state)
        fnc(state)
      }
    },
    /**
     * Function that registers a callback called on every state change.
     * @param {Function} listener any function.
     */
    subscribe(listener) {
      // 1. checks listener suscribed
      if (!Object.hasOwn(listeners, listener.name)) {
        listeners[listener.name] = listener
      }
    },
    /**
     * Function that removes a listener.
     * @param {Function} listener any function.
     */
    unsubscribe(listener) {
      // 1. checks listener suscribed
      if (listener.name in listeners) {
        delete listeners[listener.name]
      }
    },
  }
}

const store = createStore({ count: 0, name: "Yoandy" })
const log = (state) => console.log("State changed:", state)
store.subscribe(log)

store.setState((s) => {
  return { ...s, count: s.count + 1 }
})
// logs: State changed: { count: 1, name: "Yoandy" }
store.setState((s) => ({ ...s, count: s.count + 1 }))
// logs: State changed: { count: 2, name: "Yoandy" }

store.unsubscribe(log)
store.setState((s) => ({ ...s, count: 99 }))
// (nothing logged — listener was removed)

console.log(store.getState()) // { count: 99, name: "Yoandy" }

// ════════════════════════════════════════
// PART 4 — COMBINED CHALLENGES (25 pts)
// ════════════════════════════════════════

console.log("\n=== Part 4 — Combined Challenges ===")

// ── X1 (8 pts) ───────────────────────────
console.log("\n<<<===>>> Combined Challenges 1 <<<===>>>\n")
/**
 * Build a contacts manager using only object manipulation — no classes.
 * Implement these four functions:
 *
 * createContact(firstName, lastName, email, phone)
 *   → returns a contact object with a generated id (use Date.now())
 *     and a createdAt timestamp (ISO string)
 *
 * addContact(contacts, contact)
 *   → returns a NEW contacts object with the contact added (keyed by id)
 *     Does not mutate the original contacts object.
 *
 * findContact(contacts, query)
 *   → searches by firstName, lastName, or email (case-insensitive)
 *   → returns array of matching contact objects
 *
 * deleteContact(contacts, id)
 *   → returns a NEW contacts object without the contact with that id
 *     Does not mutate the original.
 */
// Your solution:

/**
 * Function that returns a contact object with a generated id (use Date.now()) and a createdAt timestamp (ISO string)
 * @param {String} firstName any firstName.
 * @param {String} lastName any lastName.
 * @param {String} email email address contact.
 * @param {String} phone phone number contact.
 * @returns {Object} a contact object.
 */
const createContact = (firstName, lastName, email, phone) => {
  const dateObj = new Date()
  return {
    id: Date.now(),
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    createdAt: dateObj.toISOString(),
  }
}

/**
 * Function that returns a NEW contacts object with the contact added (keyed by id)
 * Does not mutate the original contacts object.
 * @param {Object} contacts contacts object.
 * @param {Object} contact any contact.
 * @returns {Object{}} returns a NEW contacts object with the contact added (keyed by id)
 */
const addContact = (contacts, contact) => {
  let newContacts = { ...contacts }
  newContacts[contact.id] = contact
  return newContacts
}

/**
 * Function that searches by firstName, lastName, or email (case-insensitive)
 * @param {Object} contacts contacts object.
 * @param {String} query search key.
 * @returns {Object[]} array of matching contact objects.
 */
const findContact = (contacts, query) => {
  const result = []
  for (const key in contacts) {
    if (
      contacts[key]["firstName"].toLowerCase() === query.toLowerCase() ||
      contacts[key]["lastName"].toLowerCase() === query.toLowerCase() ||
      contacts[key]["email"] === query
    ) {
      result.push(contacts[key])
    }
  }
  return result
}

/**
 * Function that returns a NEW contacts object without the contact with that id.
 * @param {Object} contacts a contact agend.
 * @param {Number} id id to delete in contact agend.
 * @returns {Object} a NEW contacts object without the contact with that id.
 */
const deleteContact = (contacts, id) => {
  let result = { ...contacts }
  if (id in result) {
    delete result[id]
  }
  return result
}

let agend = {}
console.log("\nCreate contact")
const yoandy = createContact("Yoandy", "Doble Herrera", "codebydoble@gmail.com", "+53-582-3265")
const yerlany = createContact("Yerlany", "Doble Herrera", "yerly@gmail.com", "+53-111-3874")
console.log(yoandy)
console.log(yerlany)

console.log("\nAdd contact")
const newAgend = addContact(agend, yoandy)
const agendTwo = addContact(newAgend, yerlany)
const agendThree = addContact(agendTwo, createContact("Leandro", "Doble Salgado", "leandro.doble@gmail.com", "+53-111-6687"))
const agendFour = addContact(
  agendThree,
  createContact("Barbara", "Herrera Gonzalez", "barbara.herrera@gmail.com", "+53-136-3549"),
)

console.log(agendTwo)
console.log(agendThree)

let myAgend = {
  1781226467635: {
    id: 1781226467635,
    firstName: "Yoandy",
    lastName: "Doble Herrera",
    email: "codebydoble@gmail.com",
    phone: "+53-582-3265",
    createdAt: "2026-06-12T01:07:47.635Z",
  },
  1781226467636: {
    id: 1781226467636,
    firstName: "Barbara",
    lastName: "Herrera Gonzalez",
    email: "barbara.herrera@gmail.com",
    phone: "+53-136-3549",
    createdAt: "2026-06-12T01:07:47.636Z",
  },
  1781226467637: {
    id: 1781226467637,
    firstName: "Yerlany",
    lastName: "Doble Herrera",
    email: "yerly@gmail.com",
    phone: "+53-111-3874",
    createdAt: "2026-06-12T01:07:47.635Z",
  },
  1781226467638: {
    id: 1781226467638,
    firstName: "Leandro",
    lastName: "Doble Salgado",
    email: "leandro.doble@gmail.com",
    phone: "+53-111-6687",
    createdAt: "2026-06-12T01:07:47.636Z",
  },
}
console.log("\nFind contact")
const matching = findContact(myAgend, "yoandy")
console.log(matching)

console.log("\nDelete contact")
const deletedContact = deleteContact(myAgend, 1781226467635)
console.log(deletedContact)

// ── X2 (8 pts) ───────────────────────────
console.log("\n<<<===>>> Combined Challenges 2 <<<===>>>\n")
/**
 * Implement a settings/config system that supports nested dot-notation access.
 *
 * createConfig(defaults) returns an object with:
 *   get(path)        → reads a value at a dot-notation path
 *   set(path, value) → sets a value at a dot-notation path (mutates internal state)
 *   reset()          → resets all config to the original defaults (deep clone)
 *   getAll()         → returns the current config (a copy)
 *
 * const config = createConfig({
 *   theme: { color: "blue", fontSize: 14 },
 *   language: "en",
 *   features: { darkMode: false, notifications: true }
 * })
 *
 * config.get("theme.color")          //→ "blue"
 * config.get("features.darkMode")    //→ false
 * config.get("language")             //→ "en"
 * config.set("theme.color", "red")
 * config.get("theme.color")          //→ "red"
 * config.reset()
 * config.get("theme.color")          //→ "blue"  (back to default)
 *
 * Hint: split path by ".", then traverse the object step by step.
 */
// Your solution:
/**
 * Function settings/config system that supports nested dot-notation access.
 * @param {Object} defaults any object configuration.
 * @returns {Object} createConfig(defaults) returns an object with:
 *   get(path)        → reads a value at a dot-notation path
 *   set(path, value) → sets a value at a dot-notation path (mutates internal state)
 *   reset()          → resets all config to the original defaults (deep clone)
 *   getAll()         → returns the current config (a copy)
 */
const createConfig = (defaults) => {
  let defaultsCopy = deepClone(defaults)
  return {
    /**
     * Function that reads a value at a dot-notation path.
     * @param {String} path any dot-notation path.
     */
    get(path) {
      // 1. split by "."
      let pathSplit = path.split(".")
      // 2. checks first element key in defaultsCopy
      if (pathSplit[0] in defaultsCopy) {
        // 3. checks key value isObject?
        if (pathSplit.length === 1) {
          // - primitive value
          console.log(defaultsCopy[path])
        } else {
          // 4. destructure arr route obj
          let [key, ...route] = pathSplit
          let result = defaultsCopy[key]
          let isRoute = true
          for (const keyPath of route) {
            if (result[keyPath] !== undefined) {
              result = result[keyPath]
            } else {
              isRoute = false
            }
          }
          if (isRoute) {
            console.log(result)
          }
        }
      }
    },
    /**
     * Function that sets a value at a dot-notation path (mutates internal state)
     * @param {String} path any dot-notation path.
     * @param {String} value any new value.
     */
    set(path, value) {
      // 1. split by "."
      let pathSplit = path.split(".")
      // 2. checks first element key in defaultsCopy
      if (pathSplit[0] in defaultsCopy) {
        // 3. checks key value isObject?
        if (pathSplit.length === 1) {
          // - primitive value
          defaultsCopy[path] = value
        } else {
          // 2. destructuring
          let [pathOne, pathTwo] = pathSplit
          if (defaultsCopy[pathOne][pathTwo] !== undefined) {
            defaultsCopy[pathOne][pathTwo] = value
          }
        }
      }
    },
    /**
     * Function that resets all config to the original defaults (deep clone).
     */
    reset() {
      defaultsCopy = deepClone(defaults)
    },
    /**
     * Function that returns the current config (a copy)
     */
    getAll() {
      return defaultsCopy
    },
  }
}

const config = createConfig({
  theme: { color: "blue", fontSize: 14 },
  language: "en",
  features: { darkMode: false, notifications: true },
})

config.get("theme.color") //→ "blue"
config.get("features.darkMode") //→ false
config.get("language") //→ "en"
config.get("width") //→
config.set("theme.color", "red")
config.get("theme.color") //→ "red"
config.set("language", "es")
config.get("language") //→ "es"
config.reset()
config.get("theme.color") //→ "blue"  (back to default)
config.get("language") //→ "en" (back to default)
// ── X3 (9 pts) ───────────────────────────
console.log("\n<<<===>>> Combined Challenges 3 <<<===>>>\n")
/**
 * Build a schema validator — a simplified version of what libraries like
 * Zod or Yup do in React projects.
 *
 * createSchema(schema) returns a validate(data) function.
 * Each schema field is an object with rules:
 *   { type, required, min, max, pattern, custom }
 *
 * validate(data) returns { valid: boolean, errors: { field: string[] } }
 * Multiple errors per field are possible.
 *
 * const userSchema = createSchema({
 *   name:  { type: "string",  required: true,  min: 2, max: 50 },
 *   age:   { type: "number",  required: true,  min: 18, max: 120 },
 *   email: { type: "string",  required: true,  pattern: /\S+@\S+\.\S+/ },
 *   bio:   { type: "string",  required: false, max: 200 },
 * })
 *
 * userSchema({ name:"Y", age:15, email:"notanemail" })
 * → {
 *     valid: false,
 *     errors: {
 *       name:  ["Too short (min 2)"],
 *       age:   ["Too small (min 18)"],
 *       email: ["Does not match pattern"],
 *     }
 *   }
 *
 * userSchema({ name:"Yoandy", age:25, email:"y@x.com" })
 * → { valid: true, errors: {} }
 */
// Your solution:
const createSchema = (schema) => {
  /**
   * createSchema(schema) returns a validate(data) function.
   * Each schema field is an object with rules:
   *   { type, required, min, max, pattern, custom }
   *
   * validate(data) returns { valid: boolean, errors: { field: string[] } }
   * Multiple errors per field are possible.
   *
   * const userSchema = createSchema({
   *   name:  { type: "string",  required: true,  min: 2, max: 50 },
   *   age:   { type: "number",  required: true,  min: 18, max: 120 },
   *   email: { type: "string",  required: true,  pattern: /\S+@\S+\.\S+/ },
   *   bio:   { type: "string",  required: false, max: 200 },
   * })
   *
   * userSchema({ name:"Y", age:15, email:"notanemail" })
   * → {
   *     valid: false,
   *     errors: {
   *       name:  ["Too short (min 2)"],
   *       age:   ["Too small (min 18)"],
   *       email: ["Does not match pattern"],
   *     }
   *   }
   */
  return function validate(data) {
    const errors = Object.entries(schema).reduce((errs, rule) => {
      const [keyRule, valueRule] = rule
      if ((keyRule in data && valueRule.required === true) || (keyRule in data && valueRule.required === false)) {
        const fieldErrs = Object.entries(valueRule)
          .filter((schemaRule) => {
            const [keyTest, valueTest] = schemaRule
            switch (keyTest) {
              case "type":
                if (typeof data[keyRule] !== valueTest) {
                  return [keyTest, valueTest]
                }
                break
              case "min":
                if (typeof data[keyRule] === "string") {
                  if (data[keyRule].length < valueTest) {
                    return [keyTest, valueTest]
                  }
                } else if (typeof data[keyRule] === "number") {
                  if (data[keyRule] < valueTest) {
                    return [keyTest, valueTest]
                  }
                }
                break
              case "max":
                if (typeof data[keyRule] === "string") {
                  if (data[keyRule].length > valueTest) {
                    return [keyTest, valueTest]
                  }
                } else if (typeof data[keyRule] === "number") {
                  if (data[keyRule] > valueTest) {
                    return [keyTest, valueTest]
                  }
                }
                break
              case "pattern":
                let objRegEx = new RegExp(valueTest, "g")
                if (objRegEx.exec(data[keyRule]) === null) {
                  return [keyTest, valueTest]
                }
                break
              case "custom":
                if (!valueTest(data[keyRule])) {
                  return [keyTest, valueTest]
                }
                break
              default:
                break
            }
          })
          .map((eachErr) => {
            let [nameErr, valueErr] = eachErr
            if (nameErr === "type") {
              return `Diff type ${valueErr}`
            } else if (nameErr === "min") {
              return `Too short (min ${valueErr})`
            } else if (nameErr === "max") {
              return `Too small (min ${valueErr})`
            } else if (nameErr === "pattern") {
              return "Does not match pattern"
            } else if (nameErr === "custom") {
              return "Invalid custom"
            }
          })
        if (fieldErrs.length > 0) {
          if (keyRule in errs) {
            errs[keyRule].contact(...fieldErrs)
          } else {
            errs[keyRule] = fieldErrs
          }
        }
      } else if (!Object.hasOwn(data, keyRule) && valueRule.required === true) {
        errs[keyRule] = ["Element not found (required)"]
      }
      return errs
    }, {})
    return { valid: Object.entries(errors).length > 0 ? false : true, errors: errors }
  }
}

const userSchema = createSchema({
  name: {
    type: "string",
    required: true,
    min: 2,
    max: 50,
    custom(data) {
      return data.length > 3
    },
  },
  age: { type: "number", required: true, min: 18, max: 120 },
  email: { type: "string", required: true, pattern: /\S+@\S+\.\S+/ },
  bio: { type: "string", required: false, max: 200 },
})

console.log("VALIDATE ", userSchema({ name: "Y", age: 15, email: "notanemail" }))
console.log("VALIDATE 2 ", userSchema({ name: "Yoandy", age: 25, email: "y@x.com" }))

// ════════════════════════════════════════
// END OF EXAM
// ════════════════════════════════════════
/*
 Before submitting, verify:
 [x] Every function has JSDoc
 [x] Every function tested with at least 2 console.logs
 [x] node fcc-ch5-objects-exam.js runs without errors
 [x] No input objects were mutated (unless the exercise says to)
 [x] Name and end time filled in at the top
*/
