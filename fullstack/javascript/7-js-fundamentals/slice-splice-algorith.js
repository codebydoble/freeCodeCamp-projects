/**
 * Function that accepts two arrays and an index. Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
 * @param {Array} firstArr any array.
 * @param {Array} secondArr any array.
 * @param {Number} index number .
 * @returs an array with each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
 */
const frankenSplice = (firstArr, secondArr, index) => {
  const secondArrCopy = [...secondArr]
  secondArrCopy.splice(index, 0, ...firstArr)
  return secondArrCopy
}

// --- Test Cases ---
console.log("--- Slice Splice Algorithm ---")
/*console.log(frankenSplice([2, 5, -7, "@codebydoble", true, false], [3, "Yoandy", 4], 1))*/
//console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
console.log(frankenSplice([1, 2, 3, 4], [], 0))
console.log("\n====================================")
