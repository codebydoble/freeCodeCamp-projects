/**
 * Function that removes all falsy values from an array.
Falsy values in JavaScript are: false, null, 0, "", undefined, and NaN.
 * @param {Array} arr any Array.
 * @returns {Array} new array without falsy values.
 */
const bouncer = (arr) => {
  const falsy = new Set([false, null, 0, "", undefined, NaN])
  return arr.filter((element) => {
    if (!falsy.has(element)) return element
  })
}

console.log(bouncer(["codebydoble", false, 2.45, true, [45, 68], undefined, { name: "Yoandy" }, null]))
