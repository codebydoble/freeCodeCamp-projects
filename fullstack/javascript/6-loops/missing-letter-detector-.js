/**
 * Function that find the missing letter in the passed letter range and return it.
 * @param {String} str a string representing a range of letters in alphabetical order which can have one letter missing.
 * @returns {String|undefined} missing letter or undefined if all letters are present in the range.
 */
const fearNotLetter = (str) => {
  const lettersDicc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  let missing = []
  let idx = lettersDicc.findIndex((letter) => letter === str[0].toLowerCase())
  if (str.length === 0) return "Empty string."
  if (idx === -1) return "The elements isn't a letter. "

  for (let index = 0; index < str.length; index++) {
    while (str[index].toLowerCase() !== lettersDicc[idx]) {
      // add missing letters
      missing.push(lettersDicc[idx])
      idx++
    }
    idx++
  }
  return missing.join(",") || undefined
}

// --- Test Cases ---
console.log("--- Missing Letter Detector- ---")
console.log(fearNotLetter("MnPQrSU"))
console.log("\n====================================")
