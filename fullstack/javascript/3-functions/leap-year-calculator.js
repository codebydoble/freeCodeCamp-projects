/**
 * Leap Year Calculator. A leap year is a year that is divisible by 4, except for years that are divisible by 100 and not divisible by 400. For example, 2000 is a leap year, but 1900 is not. Also, a leap year has an extra day in February, which is the 29th day of the month.
 * @param {Number} year any year.
 * @returns {Boolean}
 */
const isLeapYear = (year) => {
  let decision
  if (year % 100 === 0 && year % 400 !== 0) {
    decision = "is not a leap year."
  } else if (year % 4 === 0) {
    decision = "is a leap year."
  } else {
    decision = "is not a leap year."
  }
  return `${year} ${decision}`
}

const year = 2024
const result = isLeapYear(year)
console.log(result)
