/**
 * Function that accepts an array of two numbers. sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 * @param {Array} arr any array of two numbers.
 * @returns {Number} return the sum of first and second number in array plus the sum of all the numbers between them.
 */
const sumAll = (arr) => {
  const [numOne, numTwo] = arr
  let result = 0
  if (numOne === numTwo) return numOne + numTwo
  if (numOne < numTwo) {
    for (let index = numOne; index <= numTwo; index++) {
      result += index
    }
  } else {
    for (let index = numTwo; index <= numOne; index++) {
      result += index
    }
  }
  return result
}

console.log(sumAll([1, 4]))
console.log(sumAll([4, 1]))
