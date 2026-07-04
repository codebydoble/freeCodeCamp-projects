const num = 8

/**
 * Function that calculates factorial.
 * @param {Number} num any number.
 * @returns {Number} the factorial of that number.
 */
const factorialCalculator = (num) => {
  let result = 1
  for (let index = 1; index <= num; index++) {
    result *= index
  }
  return result
}
// --- Test Cases ---
console.log("--- Factorial Calculator ---")
let factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)
console.log("\n====================================")
