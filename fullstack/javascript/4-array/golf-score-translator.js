/**
 * Function game of Golf, each hole has a par, meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname. Function that converts the par and strokes to their nickname.
 * @param {Number} par meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play.
 * @param {Number} strokes your strokes in a hole.
 * @returns {String} nickname par - strokes convertion.
 */
const golfScore = (par, strokes) => {
  if (strokes === 1) {
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return "Eagle"
  } else if (strokes === par - 1) {
    return "Birdie"
  } else if (strokes === par) {
    return "Par"
  } else if (strokes === par + 1) {
    return "Bogey"
  } else if (strokes === par + 2) {
    return "Double Bogey"
  } else if (strokes >= par + 3) {
    return "Go Home!"
  }
}

// Test cases:
console.log(`Exercise: Golf Game`)
const nicknameOne = golfScore(5, 1)
const nicknameTwo = golfScore(6, 1)
const nicknameThree = golfScore(4, 2)
const nicknameFour = golfScore(4, 4)
const nicknameFive = golfScore(2, 2)
const nicknameSix = golfScore(7, 9)
const nicknameSeven = golfScore(5, 6)

console.log(nicknameOne)
console.log(nicknameTwo)
console.log(nicknameThree)
console.log(nicknameFour)
console.log(nicknameFive)
console.log(nicknameSix)
console.log(nicknameSeven)
console.log("\n==================================\n")
