/**
 * Simple string inverter manual no reverse o toreverse method.
 * @param {String} str any sentence.
 * @returns {String} reversed string.
 */
const reverseString = (str) => {
  const result = []
  for (let index = str.length; index >= 0; index--) {
    result.push(str[index])
  }
  return result.join("")
}

// --- Test Cases ---
console.log("--- String Inverter ---")
console.log(reverseString("--- String Inverter ---"))
console.log(reverseString("hello"))
console.log("\n====================================")
