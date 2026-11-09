/**
 *
 * @param {String} pattern
 * @param {Number} rows
 * @param {Boolean} invert
 */
const pyramid = (pattern, rows, invert) => {
  const result = []
  let spaceCountUp = rows
  let spaceCountDown = rows - 1
  if (invert) {
    // 1. vertex facing downwards.
    for (let index = rows - 1; index >= 0; index--) {
      result.push(
        " ".repeat(spaceCountDown - index) + pattern + pattern.repeat(index * 2) + " ".repeat(spaceCountDown - index) + "\n",
      )
    }
  } else {
    // 2. vertex facing upwards.
    for (let index = 0; index < rows; index++) {
      result.push(" ".repeat(spaceCountUp - 1) + pattern + pattern.repeat(index * 2) + " ".repeat(spaceCountUp - 1) + "\n")
      spaceCountUp--
    }
  }
  return result.join("")
}

console.log(pyramid("o", 4, false))
