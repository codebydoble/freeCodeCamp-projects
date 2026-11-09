/**
 * Function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.
 * @param {String} sentence any string.
 * @returns {String} string title case.
 */
const titleCase = (sentence) => {
  return sentence
    .split(/\s+/g)
    .map((word) => {
      if (word.length === 1) return word.toUpperCase()
      const [element, toCase, ...rest] = word.split(/(\w+)/g)
      if (toCase.length === 1) {
        return element + toCase.toUpperCase() + rest
      } else {
        return element + toCase[0].toUpperCase() + toCase.slice(1) + rest
      }
    })
    .join(" ")
}

console.log(titleCase("I like to code")) // return "I Like To Code".
console.log(titleCase("javaScript is fun")) // return "Javascript Is Fun"

const srtCase = titleCase("I             &     like to code. Congrats!        *x*yoandy**")
console.log(srtCase)
