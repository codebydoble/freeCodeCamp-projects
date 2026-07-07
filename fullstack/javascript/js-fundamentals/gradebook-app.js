/**
 * Function that calculates average notes.
 * @param {Array} arr any notes array.
 * @returns {Number} average notes.
 */
const getAverage = (arr) => {
  if (arr.length === 0) return 0
  return arr.reduce((avg, note, index, entireArr) => {
    avg += note
    if (index === entireArr.length - 1) {
      avg /= entireArr.length
    }
    return avg
  }, 0)
}

/**
 * Function that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:
   Score Range
   Grade
   100     "A+"
   90 - 99 "A"
   80 - 89 "B"
   70 - 79 "C"
   60 - 69 "D"
    0 - 59 "F"
 * @param {Number} score a student score .
 * @returns {String} a string representing a letter grade based on the score.
 */
const getGrade = (score) => {
  if (score === 100) {
    return "A+"
  } else if (score <= 99 && score >= 90) {
    return "A"
  } else if (score <= 89 && score >= 80) {
    return "B"
  } else if (score <= 79 && score >= 70) {
    return "C"
  } else if (score <= 69 && score >= 60) {
    return "D"
  } else {
    return "F"
  }
}

/**
 * Function that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.
 * @param {Number} score average student notes.
 * @returns {Boolean} true or false depending on if score corresponds to a passing grade.
 */
const hasPassingGrade = (score) => {
  const grade = getGrade(score)
  return grade !== "F" ? true : false
}

/**
 *
 * @param {Array} scores
 * @param {Number} studentScore
 * @returns {String}
 */
const studentMsg = (scores, studentScore) => {
  const average = getAverage(scores)
  const grade = getGrade(studentScore)
  let result = `Class average: ${average}. Your grade: ${grade}.`
  console.log(">>>msg passing", hasPassingGrade(average))
  hasPassingGrade(average) ? (result += " You passed the course.") : (result += " You failed the course.")
  return result
}

/* --- Test Cases --- */
console.log("--- Gradebook App ---")
const studentScore = getAverage([98, 63, 95, 94, 87, 88])
console.log(">>>Student Score", studentScore) // returns 87.5
const studentGrade = getGrade(studentScore)
console.log(">>>Grade", studentGrade) // returns "B"
const studentPassing = hasPassingGrade(studentScore)
console.log(">>>is Passing Grade", studentPassing) // returns true
const msg = studentMsg([98, 63, 95, 94, 87, 88], 87.5)
console.log(msg)
console.log("\n====================================")
