/**
 * Function that return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise.
 * @param {Array} arr any array with 2 elements.
 * @returns {Boolean} return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise.
 */
const mutation = (arr) => {
  const [firstWord, secondWord] = arr
  const firstWordMapped = lettersMap(firstWord)
  const secondWordMapped = lettersMap(secondWord)
  return compareMaps(firstWordMapped, secondWordMapped)
}

/**
 * Function that groupBy letter occurrences.
 * @param {String} str any word.
 * @returns {Map} groupBy letter occurrences.
 */
const lettersMap = (str) => {
  const strArr = str.trim().toLowerCase().split("")
  return strArr.reduce((map, letter) => {
    letter in map ? map[letter]++ : (map[letter] = 1)
    return map
  }, {})
}

/**
 * Function that compare two objects. Loop second object and return true if the string in the first element of the object contains all of the letters of the string in the second element of the object, and false otherwise.
 * @param {Object} firstMap any object mapped.
 * @param {Object} secondMap any object mapped.
 * @returns {Boolean} true|false
 */
const compareMaps = (firstMap, secondMap) => {
  let chek = true
  for (const [key, value] of Object.entries(secondMap)) {
    if (!(key in firstMap)) {
      return false
    }
  }
  return true
}
// --- Test Cases ---
console.log("--- Mutations Algorithm ---")
const case1 = mutation(["hello", "HeLlo"])
console.log(case1)
const case2 = mutation(["hello", "hey"])
console.log(case2)
const case3 = mutation(["Alien", "line"])
console.log(case3)
const case4 = mutation(["Mary", "Aarmy"])
console.log(case4)
console.log("\n====================================")
