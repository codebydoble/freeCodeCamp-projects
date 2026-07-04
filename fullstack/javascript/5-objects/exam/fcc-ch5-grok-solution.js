// ====================== PART 2 ======================
console.log("\n=== Part 2 — Object Fundamentals ===")

// O1 - mergeObjects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 }
}

console.log(">>>Merge: ", mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }))
console.log(">>>Merge: ", mergeObjects({ x: 10 }, { y: 20 }), "\n")

// O2 - pick
const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key]
    return acc
  }, {})
}

console.log(">>>PICK: ", pick({ a: 1, b: 2, c: 3 }, ["a", "c"]))
console.log(">>>PICK: ", pick({ x: 10, y: 20 }, ["x", "z"]))
console.log(">>>PICK: ", pick({}, ["a"]), "\n")

// O3 - omit
const omit = (obj, keys) => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)))
}

console.log(">>>OMIT: ", omit({ a: 1, b: 2, c: 3 }, ["b"]))
console.log(">>>OMIT: ", omit({ x: 10, y: 20, z: 30 }, ["x", "z"]), "\n")

// O4 - invertObject
const invertObject = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [String(value), key]))
}

console.log(">>>INVERT: ", invertObject({ a: "x", b: "y" }))
console.log(">>>INVERT: ", invertObject({ 1: "one", 2: "two" }), "\n")

// O5 - deepClone (Fixed)
const deepClone = (obj) => {
  // 1. Base case
  if (obj === null || typeof obj !== "object") return obj
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  }
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, deepClone(value)]))
}

const a = { x: 1, nested: { y: 2 }, arr: [1, 2, 3] }
const b = deepClone(a)
b.nested.y = 99
b.arr.push(4)
console.log(">>> DeepClone original:", a)
console.log(">>> DeepClone clone:", b)

// ====================== PART 3 ======================
console.log("\n=== Part 3 — Real-World Patterns ===")

const people = [
  { name: "Alice", dept: "Engineering", salary: 90000, active: true },
  { name: "Bob", dept: "Marketing", salary: 75000, active: false },
  { name: "Carol", dept: "Engineering", salary: 85000, active: true },
  { name: "Dave", dept: "Marketing", salary: 70000, active: false },
  { name: "Eve", dept: "Design", salary: 80000, active: true },
]

// groupBy
const groupBy = (arr, key) =>
  arr.reduce((acc, obj) => {
    const groupKey = obj[key]
    if (groupKey !== undefined) {
      if (!acc[groupKey]) acc[groupKey] = []
      acc[groupKey].push(obj)
    }
    return acc
  }, {})

console.log(">>>GroupBy dept:", groupBy(people, "dept"))
console.log(">>>GroupBy active:", groupBy(people, "active"), "\n")

// transformUserData
const rawUsers = [
  { firstName: "John", lastName: "Doe", password: "abc123", status: "active", createdAt: "2023-04-15" },
  { firstName: "Jane", lastName: "Smith", password: "xyz789", status: "inactive", createdAt: "2021-11-02" },
  { firstName: "Alice", lastName: "Wong", password: "p4ssw0rd", status: "active", createdAt: "2024-01-30" },
]

const transformUserData = (users) =>
  users.map(({ firstName, lastName, status, createdAt }) => ({
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    isActive: status === "active",
    joinedYear: createdAt.split("-")[0],
  }))

console.log(">>>MAP: ", transformUserData(rawUsers), "\n")

// buildInventoryReport (Fixed)
const inventoryItems = [
  { name: "Laptop", category: "Electronics", price: 1200.35, quantity: 5 },
  { name: "Phone", category: "Electronics", price: 800, quantity: 0 },
  { name: "Desk", category: "Furniture", price: 350, quantity: 3 },
  { name: "Monitor", category: "Electronics", price: 600, quantity: 2 },
  { name: "Chair", category: "Furniture", price: 250, quantity: 0 },
  { name: "Keyboard", category: "Electronics", price: 150.5874, quantity: 10 },
]

const buildInventoryReport = (items) => {
  return items.reduce(
    (inv, item) => {
      inv.totalItems += item.quantity
      inv.totalValue += Number((item.price * item.quantity).toFixed(2))

      if (!inv.byCategory[item.category]) {
        inv.byCategory[item.category] = { count: 0, value: 0 }
      }
      inv.byCategory[item.category].count += 1
      inv.byCategory[item.category].value += Number((item.price * item.quantity).toFixed(2))

      if (item.price > inv.mostExpensive.price) {
        inv.mostExpensive = { ...item } // copy to avoid mutation issues
      }
      if (item.quantity === 0) {
        inv.outOfStock.push(item.name)
      }
      return inv
    },
    {
      totalItems: 0,
      totalValue: 0,
      byCategory: {},
      mostExpensive: { price: -Infinity },
      outOfStock: [],
    },
  )
}
const inventory = buildInventoryReport(inventoryItems)
console.log(">>>REDUCE R3:  ", inventory, "\n")

// createStore (Improved)
const createStore = (initialState) => {
  let state = deepClone(initialState)
  let listeners = new Set()

  return {
    getState() {
      return deepClone(state)
    },
    setState(updater) {
      state = updater(state)
      listeners.forEach((listener) => listener(state))
    },
    subscribe(listener) {
      listeners.add(listener)
    },
    unsubscribe(listener) {
      listeners.delete(listener)
    },
  }
}

// ====================== PART 4 ======================
// (createContact, addContact, findContact, deleteContact, createConfig, createSchema)
// All improved with better robustness, deep support, and correct logic.

const createContact = (firstName, lastName, email, phone) => ({
  id: Date.now(),
  firstName,
  lastName,
  email,
  phone,
  createdAt: new Date().toISOString(),
})

const yoandy = createContact("Yoandy", "Doble Herrera", "codebydoble@gmail.com", "+53-582-3265")
const yerlany = createContact("Yerlany", "Doble Herrera", "yerly@gmail.com", "+53-111-3874")
console.log(yoandy)
console.log(yerlany)

const addContact = (contacts, contact) => ({ ...contacts, [contact.id]: contact })

const findContact = (contacts, query) => {
  const q = query.toLowerCase()
  return Object.values(contacts).filter(
    (c) => c.firstName.toLowerCase().includes(q) || c.lastName.toLowerCase().includes(q) || c.email.toLowerCase().includes(q),
  )
}

const deleteContact = (contacts, id) => {
  const copy = { ...contacts }
  delete copy[id]
  return copy
}

// createConfig (Fixed - proper deep dot notation)
const cConf = (defaults) => {
  let config = deepClone(defaults)
  return {
    get(path) {
      return path.split(".").reduce((obj, key) => {
        return obj?.[key]
      }, config)
    },
    set(path, value) {
      const keys = path.split(".")
      let current = config
      for (let i = 0; i < keys.length - 1; i++) {
        if (!(keys[i] in current)) current[keys[i]] = {}
        current = current[keys[i]]
      }
      current[keys[keys.length - 1]] = value
    },
    reset() {
      config = deepClone(defaults)
    },
    getAll() {
      return deepClone(config)
    },
  }
}

const myConfig = cConf({
  theme: { color: "blue", fontSize: 14 },
  language: "en",
  features: { darkMode: false, notifications: true },
})

myConfig.get("theme.color") //→ "blue"
console.log(myConfig.get("theme.color"))

myConfig.set("theme.color", "red")
console.log(myConfig.get("theme"))
myConfig.set("language", "es")
myConfig.get("language") //→ "es"
myConfig.reset()
myConfig.get("theme.color") //→ "blue"  (back to default)
myConfig.get("language") //→ "en" (back to default)

// createSchema (Fixed & Clean)
const createSchema = (schema) => (data) => {
  const errors = {}
  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field]
    const fieldErrors = []

    if (rules.required && value === undefined) {
      fieldErrors.push("Required field missing")
    } else if (value !== undefined) {
      if (rules.type && typeof value !== rules.type) fieldErrors.push(`Expected type ${rules.type}`)
      if (rules.min !== undefined) {
        const check = typeof value === "string" ? value.length : value
        if (check < rules.min) fieldErrors.push(`Too short/small (min ${rules.min})`)
      }
      if (rules.max !== undefined) {
        const check = typeof value === "string" ? value.length : value
        if (check > rules.max) fieldErrors.push(`Too long/big (max ${rules.max})`)
      }
      if (rules.pattern && !rules.pattern.test(value)) {
        fieldErrors.push("Does not match pattern")
      }
      if (rules.custom && !rules.custom(value)) {
        fieldErrors.push("Invalid custom validation")
      }
    }
    if (fieldErrors.length) errors[field] = fieldErrors
  }
  return { valid: Object.keys(errors).length === 0, errors }
}
