/**
 * Function that checks if a string ends with the given target string.
 * @param {String} sentence any sentence.
 * @param {String} strToCheckAgainst the given target string to sentence check.
 * @returns {Boolean} Return true if the first string ends with the second string, and false otherwise.
 */
function confirmEnding(sentence, strToCheckAgainst) {
  let decision
  // 1. check length: sentence should be bigger than strToCheckAgainst
  if (sentence.length < strToCheckAgainst.length) {
    return false
  }
  // 2. Extract string ends from sentence
  let strToCheck = sentence.slice(-strToCheckAgainst.length)
  strToCheck === strToCheckAgainst ? (decision = true) : (decision = false)
  return decision
}
console.log(confirmEnding("Bastian", "n")) //true
console.log(confirmEnding("Congratulation", "on")) //true
console.log(confirmEnding("Connor", "n")) //false
console.log(
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"),
) //false
console.log(confirmEnding("He has to give me a new name", "name")) //true
console.log(confirmEnding("Open sesame", "same")) //true
console.log(confirmEnding("Open sesame", "sage")) //false
console.log(confirmEnding("Open sesame", "game")) //false
console.log(
  confirmEnding(
    "If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing",
    "mountain",
  ),
) //false
console.log(confirmEnding("Abstraction", "action")) //true
