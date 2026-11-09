/**
 * Function that looks through an array and returns the first element that passes a test function
 * @param {Array} arr any array.
 * @param {Function} fn function test.
 * @returns {Number|String|undefined} the first element where the test function returns true.
 */
const findElement = (arr, fn) => {
  const passed = arr.filter((element) => {
    return fn(element)
  })
  return passed.length > 0 ? passed[0] : undefined
}

/* --- Test Cases --- */
console.log("--- String Inverter ---")
console.log(findElement([1, 3, 5, 8], (num) => num % 2 === 0)) // returns 8
console.log(findElement([1, 3, 5], (num) => num % 2 === 0)) // returns undefined
console.log("\n====================================")
