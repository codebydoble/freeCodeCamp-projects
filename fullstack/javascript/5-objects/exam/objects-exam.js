/**
 * ========================================
 * EXAM 2: THE SECRET LIFE OF OBJECTS
 * ========================================
 * Focus: Eloquent JS Ch 6 (OOP, Prototypes, Classes, Polymorphism)
 * Rules: Vanilla JS.
 * ========================================
 */
"use strict"
console.log("=== Part 1: Classes & Encapsulation ===")

// ── Q1: The Vector Class ──
/**
 * Write a class 'Vec' that represents a vector in two-dimensional space.
 * It takes 'x' and 'y' parameters (numbers), which it should save to properties of the same name.
 * * Give the Vec prototype two methods, 'plus' and 'minus', that take another
 * vector as a parameter and return a NEW vector that has the sum or difference
 * of the two vectors' (this and the parameter) x and y values.
 * * Add a getter property 'length' to the prototype that computes the length of
 * the vector (distance from the origin 0,0). Hint: Math.sqrt(x*x + y*y).
 */

/**
 * Class 'Vec' that represents a vector in two-dimensional space.
 * It takes 'x' and 'y' parameters (numbers).
 */
class Vec {
  /**
   * A vector in two-dimensional space.
   * @param {Number} x axis x.
   * @param {Number} y axis y.
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  /**
   * Function that sum of the two vectors' (this and the parameter) x and y values.
   * @param {Vec} vector any vector.
   * @returns {Vec} a NEW vector.
   */
  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y)
  }

  /**
   * Function that returns the difference of the two vectors' (this and the parameter) x and y values.
   * @param {Vec} vector any vector.
   * @returns {Vec} a NEW vector.
   */
  minus(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y)
  }

  /**
   * @returns {Number} the length of the vector (distance from the origin 0,0).
   */
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

// Tests Q1:
console.log("Q1 Tests:")
console.log(new Vec(1, 2).plus(new Vec(2, 3))) // expected: Vec { x: 3, y: 5 }
console.log(new Vec(1, 2).minus(new Vec(2, 3))) // expected: Vec { x: -1, y: -1 }
console.log(new Vec(3, 4).length) // expected: 5

console.log("\n=== Part 2: Maps & Polymorphism ===")

// ── Q2: Using Maps ──
/**
 *
 */

/**
 * Create a function 'wordFrequency' that takes a string of text, splits it by spaces, and returns a standard JavaScript `Map` object where the keys are the unique words and the values are the number of times that word appeared. Ignore punctuation and capitalization for simplicity, just split by " ".
 * @param {String} text any sentence.
 *  @returns {Map} returns a standard JavaScript `Map` object where the keys are the unique words and the values are the number of times that word appeared.
 */
function wordFrequency(text) {
  // 1. lowerCase, remove punctuation, split by space.
  const txtSplitted = text
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s+]/g, "")
    .split(/\s+/g)
  return txtSplitted.reduce(
    /**
     * Reduce to create a word Map.
     * @param {Map} objMap acc Obj.
     * @param {String} word each word.
     */
    (objMap, word) => {
      if (objMap.has(word)) {
        return objMap.set(word, objMap.get(word) + 1)
      } else {
        return objMap.set(word, 1)
      }
    },
    new Map(),
  )
}

// Tests Q2:
console.log("Q2 Tests:")
const freqMap = wordFrequency("the quick brown fox jumps over the lazy dog")
console.log(freqMap.get("the")) // expected: 2
console.log(freqMap.has("fox")) // expected: true

// ── Q3: Polymorphism (Overriding) ──
/**
 * 1. Create a class 'Temperature' that takes Celsius in its constructor.
 * 2. Override the standard `toString` method so that when you try to print
 * the object as a string, it returns "X°C" (where X is the temperature).
 */
class Temperature {
  /**
   * @param {Number} celsius any number celsius.
   */
  constructor(celsius) {
    this.celsius = celsius
  }
  toString() {
    return `${this.celsius}°C`
  }
}
// Tests Q3:
console.log("\nQ3 Tests:")
const temp = new Temperature(22)
console.log(String(temp)) // expected: "22°C"

console.log("\n=== Part 3: Iterators & Symbols (Advanced) ===")

// ── Q4: The Iterable Group ──
/**
 * Write a class called 'Group' (like a Set).
 * It has 'add', 'delete', and 'has' methods.
 * Its constructor creates an empty array to store members.
 * * Challenge: Make the Group class iterable. Add a Symbol.iterator method
 * so that you can use a 'for...of' loop directly on a Group instance.
 */

class Group {
  index = 0
  constructor() {
    this.members = []
  }
  add(value) {
    if (!this.has(value)) this.members.push(value)
  }
  delete(value) {
    this.members = this.members.filter((v) => v !== value)
  }
  has(value) {
    return this.members.includes(value)
  }

  // Implement Symbol.iterator here
  [Symbol.iterator]() {
    return function next() {
      if (this.members.length === 0) {
        return { done: true }
      } else if (this.index <= this.members.length - 1) {
        return { value: this.members[this.index], done: false }
      }
    }
  }
}

// Tests Q4:
console.log("Q4 Tests:")
const group = new Group()
group.add(10)
group.add(20)
group.add(30)
console.log(">>>GROUP", group)

const result = []
for (let value of group) {
  result.push(value)
}
console.log(result) // expected: [10, 20, 30]
