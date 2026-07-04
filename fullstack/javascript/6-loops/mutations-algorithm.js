/**
 * Function that return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise.
 * @param {Array} arr any array with 2 elements.
 * @returns {Boolean} return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise.
 */
const mutation = (arr) => {
  const [firstWord, secondWord] = arr
  const firstWordMapped = lettersMap(firstWord)
  const secondWordMapped = lettersMap(secondWord)
  // 1. Compare occurrences each map
  for (const [key, value] of secondWordMapped.entries()) {
    if (!firstWordMapped.has(key)) {
      return false
    } else if (firstWordMapped.get(key) !== value) {
      return false
    }
  }
  return true
}

/**
 * Function that groupBy letter occurrences.
 * @param {String} str any word.
 * @returns {Map} groupBy letter occurrences.
 */
const lettersMap = (str) => {
  let strMapped = new Map()
  const strArr = str.toLowerCase().split("")
  strArr.forEach((letter) => {
    strMapped.set(letter, (strMapped.get(letter) || 0) + 1)
  })
  return strMapped
}
// --- Test Cases ---
console.log("--- Mutations Algorithm ---")
const checkWords = mutation(["hello", "HeLlo"])
console.log(checkWords)
const checkWordsFalse = mutation(["hello", "hey"])
console.log(checkWordsFalse)
const checkWordsTrue = mutation(["Alien", "line"])
console.log(checkWordsTrue)
console.log("\n====================================")
