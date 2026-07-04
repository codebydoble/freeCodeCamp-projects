/**
 * Function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
 * @param {Array} arr any array.
 * @param {Number} num length to split array.
 * @returns {Array} a two-dimensional array.
 */
const chunkArrayInGroups = (arr, num) => {
  let chunky = []
  let numArr = []
  if (num >= arr.length) return [].concat(arr)
  for (let index = 0; index < arr.length; index++) {
    if (numArr.length < num) {
      numArr.push(arr[index])
    }
    if (index === arr.length - 1) {
      chunky.push(numArr)
      return chunky
    }
    if (numArr.length === num) {
      chunky.push(numArr)
      numArr = []
    }
  }
  return chunky
}

// --- Test Cases ---
console.log("--- Chunky Monkey Algorithm ---")
console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, "Yoandy", 8, true, 10], 3))
console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, "Yoandy", 8, true, 10], 1))
console.log("\n====================================")
