/**
 * Function that returns an array consisting of the largest number from each provided sub-array.
 * @param {Array} arr any array of arrays.
 * @returns {Array} an array consisting of the largest number from each provided sub-array.
 */
const largestOfAll = (arr) => {
  const largestNumbers = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      largestNumbers.push(Math.max(...item))
    }
  })
  return largestNumbers
}

// --- Test Cases ---
console.log("--- Largest Number Finder ---")
console.log(largestOfAll([[3, 1, 9, 4], [5], [93, 66, 5, 8], [3, 69, 741, 2577, 4, 1, 8]]))
console.log("\n====================================")
