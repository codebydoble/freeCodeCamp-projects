/**
 * Function thath truncate a string to a certain length. If the length of the string is more than the given number, the string should be truncated to reduce the length so that it is equal the given number, and ... If the length of the string is equal to or lower than the given number, the string should be returned unchanged.
 * @param {String} sentence any sentence.
 * @param {Number} maxLength maximun length.
 * @returns {String} a sentence
 */
function truncateString(sentence, maxLength) {
  if (sentence.length <= maxLength) {
    return sentence
  } else {
    let truncated = sentence.slice(0, maxLength)
    return truncated + "..."
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
console.log(
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2),
)
console.log(truncateString("A-", 1))
console.log(truncateString("Absolutely Longer", 2))
