/**
 * Function named pyramid that takes three arguments. The pyramid function should return a string in which the pattern character is repeated and arranged to form a pyramid having the vertex facing upwards when the third argument is false.
 * @param {String} pattern a string representing the pattern character to repeat in your pyramid.
 * @param {Number} rows an integer representing the number of rows in the pyramid.
 * @param {Boolean} invert a Boolean value that represents the vertex facing.
 */
const pyramid = (pattern, rows, invert) => {
  const result = []
  let spaceCountUp = rows
  let spaceCountDown = rows - 1
  if (invert) {
    // 1. vertex facing downwards.
    for (let index = rows - 1; index >= 0; index--) {
      result.push(
        "\n" + " ".repeat(spaceCountDown - index) + pattern + pattern.repeat(index * 2) + " ".repeat(spaceCountDown - index),
      )
    }
  } else {
    // 2. vertex facing upwards.
    for (let index = 0; index < rows; index++) {
      result.push("\n" + " ".repeat(spaceCountUp - 1) + pattern + pattern.repeat(index * 2) + " ".repeat(spaceCountUp - 1))
      spaceCountUp--
    }
  }
  return result.join("")
}

/**
 * Function named pyramid that takes three arguments. The pyramid function should return a string in which the pattern character is repeated and arranged to form a pyramid having the vertex facing upwards when the third argument is false.
 * @param {String} pattern a string representing the pattern character to repeat in your pyramid.
 * @param {Number} rows an integer representing the number of rows in the pyramid.
 * @param {Boolean} invert a Boolean value that represents the vertex facing.
 */
const pyramidFCC = (pattern, rows, invert) => {
  const result = []
  let spaceCountUp = rows
  let spaceCountDown = rows - 1
  if (invert) {
    // 1. vertex facing downwards.
    for (let index = rows - 1; index >= 0; index--) {
      result.push(
        "\n" + " ".repeat(spaceCountDown - index) + pattern + pattern.repeat(index * 2) + " ".repeat(spaceCountDown - index),
      )
    }
  } else {
    // 2. vertex facing upwards.
    for (let index = 0; index < rows; index++) {
      result.push("\n" + " ".repeat(spaceCountUp - 1) + pattern + pattern.repeat(index * 2) + " ".repeat(spaceCountUp - 1))
      spaceCountUp--
    }
  }
  console.log(result)
  return result.join("")
}
console.log(pyramid("o", 4, false))
console.log("\n o\n ooo\n ooooo\nooooooo\n")

//console.log(pyramid("p", 5, true))
