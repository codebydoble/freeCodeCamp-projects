/**
 * Function that returns the length of the longest word in the provided sentence.
 * @param {String} str any sentence.
 * @returns {Number} length of the longest word in the provided sentence.
 */
const findLongestWordLength = (str) => {
  const strArr = str.replace(/[^A-Za-z\s+]/g, "").split(/\s+/)
  return strArr.sort((a, b) => b.length - a.length)[0]
}

const longestWordLength = findLongestWordLength("The quick, brown fox. Jumped over the lazy dog")
console.log(longestWordLength)
