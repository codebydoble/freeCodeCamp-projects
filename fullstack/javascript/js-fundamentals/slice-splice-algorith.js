/**
 * Function
 * @param {Array} firstArr any array.
 * @param {Array} secondArr any array.
 * @param {Number} index number .
 * @returs
 */
const frankenSplice = (firstArr, secondArr, index) => {
  if (index > secondArr.length - 1) return "Invalid position to insert array"
  const secondArrCopy = [...secondArr]
  secondArrCopy.splice(1, 0, ...firstArr)
  return secondArrCopy
}

// --- Test Cases ---
console.log("--- Slice Splice Algorithm ---")
console.log(frankenSplice([2, 5, -7, "@codebydoble", true, false], [3, "Yoandy", 4], 1))
console.log("\n====================================")
