/**
 * Function that converts special characters in a string with their corresponding HTML entities.
 * @param {String} sentence any string.
 * @returns {String} a new string with their corresponding HTML entities.
 */
const convertHTML = (sentence) => {
  const entity = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }
  return sentence
    .trim()
    .split("")
    .map((token) => {
      if (token in entity) return entity[token]
      return token
    })
    .join("")
}

// Test cases
console.log(convertHTML("alert('XSS') <b>Bold text \"test\" </b>"))
// Expected: "alert(&apos;XSS&apos;) &lt;b&gt;Bold text &quot;test&quot; &lt;/b&gt;"

console.log(convertHTML("  Normal comment  "))
// Expected: "Normal comment"

console.log(convertHTML("Quote: 'test' and \"test\""))
// Expected: "Quote: &apos;test&apos; and &quot;test&quot;"
