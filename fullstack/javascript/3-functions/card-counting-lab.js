let count = 0

/**
 * Casino game **Blackjack**. This is called Card Counting. Cards 2, 3, 4, 5, or 6 increased by 1. Cards 7, 8 or 9 remain unchanged. Cards 10, "J", "Q", "K" or "A" decreased by 1. Return a string with current count and the string Bet if the count is positive. Return a string with current count and the string Hold if the count is less than or equal to 0.
 * @param {String} params card parameter which can either be a number or string.
 * @returns {String} Return a string with current count and the string Bet if the count is positive. Return a string with current count and the string Hold if the count is less than or equal to 0.
 */
const cardCounter = (params) => {
  let decision

  switch (params) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break
    case 7:
    case 8:
    case 9:
      count
      break
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--
      break
    default:
      return `Error: Incorrect input, card allowed 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"`
      break
  }
  count > 0 ? (decision = "Bet") : (decision = "Hold")
  return `${count} ${decision}`
}

console.log(">>>BlackJack Casino", cardCounter(5))
