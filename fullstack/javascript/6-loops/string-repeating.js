/**
 * Function that repeats a given string a specific number of times.
 * @param {String} sentence any string.
 * @param {Number} times specific number of times.
 * @returns {String} repeated string.
 */
const repeatStringNumTimes = (sentence, times) => {
  if (times <= 0) return ""
  let result = []
  for (let index = 0; index < times; index++) {
    result.push(sentence)
  }
  return result.join(" ")
}

// --- Test Cases ---
console.log("--- String Repeating Function ---")
console.log(">>>Repeat 5 times:\n", repeatStringNumTimes("Akira", 5))
console.log(">>>Empty string:\n", repeatStringNumTimes("Akira", 0))
console.log("\n====================================")
