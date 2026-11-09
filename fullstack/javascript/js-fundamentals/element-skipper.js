/**
 * Function that skips elements in an array until it finds an acceptable one based on a specific test function.
 * @param {Array} arr any array.
 * @param {Function} fn any function.
 * @returns {Array} an array until it finds an acceptable one based on a specific test function.
 */
const dropElements = (arr, func) => {
  for (const [key, value] of arr.entries()) {
    if (func(value)) {
      return arr.slice(key)
    }
  }
  return []
}

const elements = [1, 1, 1, 2, 1, 1, 1]
const myFn = (n) => n === 2

const resultArr = dropElements(elements, myFn)
console.log(resultArr)
